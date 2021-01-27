const version = "2";

let style;

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/k6d/test/main/main.css")`
      )
    );
  },

  remove: async () => {
    style.remove();
  },

  name: "Discord Revamp",
  description: "A revamped discord based on discord's current website.",
  author: "REDACTED.",
  version,
};

obj
