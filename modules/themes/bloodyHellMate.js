const version = "0";

let style;

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/MrDragonBoi/bloody-hell-mate/main/index.css")`
      )
    );
  },

  remove: async () => {
    style.remove();
  },

  name: "Bloody Hell Mate",
  description: "Makes everything bloody red, mate!",
  author: ["MrDragonBoi", "Liam The Protogen"],
  version,
};

obj
