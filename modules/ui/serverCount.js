const version = "1.0.0";

let style;

const { inject, uninject } = goosemodScope.patcher;
const { findByProps } = goosemodScope.webpackModules;

const forceUpdate = () => {
  const { tutorialContainer } = findByProps("homeIcon");
  goosemodScope.reactUtils
    .getOwnerInstance(document.querySelector(`.${tutorialContainer}`))
    .forceUpdate();
};

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    style.appendChild(
      document.createTextNode(`.gm-serverCount {
        font-size: 10px;
        font-weight: 500;
        line-height: 1.3;
        text-align: center;
        text-transform: uppercase;
        white-space: normal;
        width: 64px;
        word-wrap: normal;
        color: var(--text-muted);
      }`)
    );
    document.head.appendChild(style);

    const { DefaultHomeButton } = findByProps("DefaultHomeButton");
    inject(
      "gm-serverCount",
      DefaultHomeButton.prototype,
      "render",
      (_, res) => {
        if (!Array.isArray(res)) {
          res = [res];
        }

        const { getGuilds } = findByProps("getGuilds");
        const guilds = Object.keys(getGuilds()).length;

        const { React } = goosemodScope.webpackModules.common;
        const { listItem } = findByProps("listItem");
        const { Messages } = findByProps("Messages");
        res.push(
          React.createElement(
            "div",
            {
              className: listItem,
            },
            React.createElement(
              "div",
              {
                id: "gm-serverCount",
                className: ["gm-serverCount"],
              },
              `${Messages.SERVERS} — ${guilds}`
            )
          )
        );

        return res;
      }
    );

    forceUpdate();
  },

  remove: async () => {
    uninject("gm-serverCount");
    style.remove();
    forceUpdate();
  },

  name: "Server Count",
  description: "Shows how many servers you're in.",
  author: "Liam The Protogen (441384103946878987)",
  version,
};

obj
