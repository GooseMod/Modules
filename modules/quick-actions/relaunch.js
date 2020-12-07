let version = "1.1.0";

const openModal = async () => {
  if (
    !(await goosemodScope.confirmDialog(
      "Relaunch",
      "Relaunch Discord",
      "Are you sure you want to relaunch Discord? This will completely terminate Discord and launch the updater."
    ))
  ) {
    return;
  }
  DiscordNative.app.relaunch();
};

const keydownHandler = (event) => {
  if (event.code == "F4") {
    openModal();
    event.preventDefault();
  }
};

let obj = {
  onImport: async () => {
    goosemodScope.settings.createItem(
      "Relaunch",
      [""],
      async () => {
        openModal();
      },
      true
    );

    document.addEventListener("keydown", keydownHandler);
  },

  remove: async () => {
    goosemod.settings.removeItem("Relaunch");
    document.removeEventListener("keydown", keydownHandler);
  },

  name: "Relaunch",
  description: "Easily relaunch Discord, completely. (Press `F4` to relaunch.)",

  author: "Liam The Protogen",

  version,
};

obj
