const version = "0";

let style;

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/Conjuringil/Splendid/main/main.css")`
      )
    );
  },

  remove: async () => {
    style.remove();
  },

  name: "Splendid Theme",
  description: "An absolutely splendid theme.",
  author: "𝙞𝙡.",
  version,
};

obj
