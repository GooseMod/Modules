const version = "1.0.0";

const { inject, uninject } = goosemodScope.patcher;

let obj = {
  onImport: async () => {
    const { findByProps, common } = goosemodScope.webpackModules;
    const MessageTimestamp = findByProps("MessageTimestamp");
    const botTagRegularClasses = findByProps("botTagRegular");
    const botTagClasses = findByProps("botTagCozy");
    const remClasses = findByProps("rem");

    inject("gm-webhookTags", MessageTimestamp, "default", (args, res) => {
      const msg = args[0].message;

      if (
        msg.webhookId != null &&
        msg.messageReference == null &&
        msg.author.discriminator == "0000"
      ) {
        args[0].message.author.bot = false;

        const header = goosemodScope.reactUtils.findInReactTree(
          res,
          (e) =>
            Array.isArray(e?.props?.children) &&
            e.props.children.find((c) => c?.props?.message)
        );
        header.props.children.push(
          common.React.createElement(
            "span",
            {
              className: `${botTagClasses.botTagCozy} ${botTagClasses.botTagCompact} ${botTagRegularClasses.botTagRegular} ${remClasses.rem}`,
            },
            common.React.createElement(
              "div",
              {
                className: botTagRegularClasses.botText,
              },
              "WEBHOOK"
            )
          )
        );
      }

      return res;
    });
  },

  remove: async () => {
    uninject("gm-webhookTags");
  },

  name: "Webhook Tags",
  description: "Replace bot tags with webhook tags for webhook messages.",
  author: "Ben855",
  version,
};

obj
