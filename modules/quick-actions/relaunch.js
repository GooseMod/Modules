let version = "1.0.1";

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
  onImport: async function () {
    goosemodScope.settings.createItem("Relaunch", [""], async () => {
      openModal();
    });

    document.addEventListener("keydown", keydownHandler);
  },

  remove: async function () {
    let settingItem = goosemodScope.settings.items.find(
      (x) => x[1] === "Relaunch"
    );
    goosemodScope.settings.items.splice(
      goosemodScope.settings.items.indexOf(settingItem),
      1
    );
    document.removeEventListener("keydown", keydownHandler);
  },

  name: "Relaunch",
  description: "Easily relaunch Discord, completely. (Press `F4` to relaunch.)",

  author: "Liam The Protogen",

  version,
};

obj
