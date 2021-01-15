const version = "1.0.0";

let settings = {
  mobileIcon: false,
};

let unpatchChannelTextAreaButton;

const setMobileIcon = (value) => {
  settings.mobileIcon = value;

  try {
    unpatchChannelTextAreaButton();
  } catch {}

  unpatchChannelTextAreaButton = goosemodScope.patcher.channelTextAreaButtons.patch(
    "Send",
    settings.mobileIcon
      ? "https://i.imgur.com/n1TQIsQ.png"
      : "https://i.imgur.com/qzomTIw.png",
    (props) => {
      if (
        goosemodScope.reactUtils.getReactInstance(
          document.querySelector(".channelTextArea-rNsIhG")
        ).memoizedProps.children[4].props.textValue == ""
      )
        return goosemodScope.webpackModules
          .findByProps("ComponentDispatch")
          .ComponentDispatch.dispatch("SHAKE_APP", {
            duration: 200,
            intensity: 2,
          });

      const textAreaWrapper = document.querySelector(".textArea-12jD-V");
      const textArea = textAreaWrapper?.children[0];

      const press = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        which: 13,
        keyCode: 13,
        bubbles: true,
      });
      Object.defineProperties(press, {
        keyCode: { value: 13 },
        which: { value: 13 },
      });

      textArea.dispatchEvent(press);
    }
  );
};

let obj = {
  onImport: async () => {
    setMobileIcon(settings.mobileIcon);
  },

  onLoadingFinished: async () => {
    goosemodScope.settings.createItem("Send Button", [
      `(v${version})`,
      {
        type: "toggle",
        text: "Mobile Icon",
        subtext:
          "Replaces the send button's icon with an icon similair to Discord's mobile app's send button.",
        onToggle: (value) => setMobileIcon(value),
        isToggled: () => settings.mobileIcon,
      },
    ]);
  },

  remove: async () => {
    goosemodScope.settings.removeItem("Send Button");
    unpatchChannelTextAreaButton();
  },

  getSettings: () => [settings],
  loadSettings: ([_settings]) => {
    settings = _settings;

    setMobileIcon(settings.mobileIcon);
  },

  name: "Send Button",
  description: "Adds a send button, similair to the mobile application.",
  author: "441384103946878987",
  version,
};

obj
