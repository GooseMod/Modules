const version = "0";

let style;

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://giangamerino.github.io/protoncord/index.css");`
      )
    );
  },

  remove: async () => {
    style.remove();
  },

  name: "Protoncord",
  description: "A sleek, modern UI inspired by the layout of ProtonVPN.",
  author: "Niko",
  version,
};

obj
