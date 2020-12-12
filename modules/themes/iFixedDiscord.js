const version = "0";

let style;

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/j0lol/i-fixed-discord/main/css/theme.css")`
      )
    );
  },

  remove: async () => {
    style.remove();
  },

  name: "i fixed discord",
  description: "Use in light mode with dark sidebar enabled.",
  author: "jo",
  version,
};

obj
