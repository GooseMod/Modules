const version = "1.1.0";

let obj = {
  onImport: async () => {
    goosemodScope.patcher.contextMenu.add("message", {
      label: "Copy Raw",
      action: (_originalArgs, extraInfo) => {
        try {
          if (extraInfo.message.content == "") {
            return goosemodScope.showToast("Unable to copy", { type: "error" });
          }

          DiscordNative.clipboard.copy(extraInfo.message.content);
          goosemodScope.showToast("Copied!", { type: "success", icon: false });
        } catch (error) {
          goosemodScope.showToast("An error has occured!", { type: "error" });
          console.error(error);
        }
      },
    });
  },

  remove: async () => {
    goosemodScope.patcher.contextMenu.remove("Copy Raw");
  },

  name: "Copy Raw",
  description: "Allows you to copy messages as they were when being written.",
  author: "Liam The Protogen",
  version,
};

obj
