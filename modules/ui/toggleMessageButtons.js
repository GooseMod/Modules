const version = "1.0.0";

let settings = {
  buttonsToggled: true,
};

const style = document.createElement("style");
style.appendChild(
  document.createTextNode(`.buttons-3JBrkn {
  display: none;
}`)
);

const updateContextItem = async (val) => {
  try {
    await goosemodScope.patcher.contextMenu.remove("toggle-message-buttons");

    goosemodScope.patcher.contextMenu.add("textarea-context", {
      id: "toggle-message-buttons",
      label: `${val ? "Disable" : "Enable"} Buttons`,
      action: () => {
        settings.buttonsToggled = !settings.buttonsToggled;
        updateContextItem(settings.buttonsToggled);

        if (val) document.head.appendChild(style);
        else style.remove();
      },
    });
  } catch (err) {
    goosemod.showToast("An error has ocurred!", { type: "error" });
    goosemod.logger.debug(err);
  }
};

let obj = {
  onImport: async () => {
    updateContextItem(settings.buttonsToggled);
  },

  remove: async () => {
    goosemodScope.patcher.contextMenu.remove("toggle-message-buttons");
    style.remove();
  },

  getSettings: () => [settings],
  loadSettings: ([_settings]) => {
    settings = _settings;

    updateContextItem(settings.buttonsToggled);
    if (!settings.buttonsToggled) document.head.appendChild(style);
    else style.remove();
  },

  name: "Toggle Message Buttons",
  description:
    "Toggles whether the buttons on the message box should appear. (Right click the message box to toggle.)",
  author: "Liam The Protogen",
  version,
};

obj
