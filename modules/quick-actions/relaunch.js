const version = "1.2.1";

let obj = {
  onImport: async () => {
    const openModal = async () => {
      if (
        document.querySelector(
          ".focusLock-Ns3yie[aria-label='Relaunch Discord']"
        )
      )
        return;

      if (
        await goosemodScope.confirmDialog(
          "Relaunch",
          "Relaunch Discord",
          "Are you sure you want to relaunch Discord? This will completely terminate Discord and launch the updater."
        )
      ) {
        DiscordNative.app.relaunch();
      }
    };

    const keydownHandler = async (event) => {
      if (event.code == "F4") {
        openModal();
        event.preventDefault();
      }
    };

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
  author: "Liam The Protogen (441384103946878987)",
  version,
};

obj
