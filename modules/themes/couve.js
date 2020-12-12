const version = "0";

let style;

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/A-User-s-Discord-Themes/couve-git-clone-pc-repo/master/couve.css")`
      )
    );
  },

  remove: async () => {
    style.remove();
  },

  name: "Couve",
  description: "A new look to discord",
  author: "A user",
  version,
};

obj
