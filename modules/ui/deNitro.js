const version = "1.0.1";

const style = document.createElement("style");
style.appendChild(document.createTextNode(`.buttons-3JBrkn > :nth-child(1), .channel-2QD9_O[href="/store"], .item-PXvHYJ[aria-controls="Discord Nitro-tab"], .wrapper-3nSjSv, .giftAction-yhDLaW, .upsellFooter-3coAfO, .buttons-3JBrkn > :nth-child(3), .navItem-3Wp_oJ[aria-controls="sticker-picker-tab-panel"] {
  display: none;
}`));

let obj = {
  onImport: async () => {
    document.head.appendChild(style);
  },

  remove: async () => {
    style.remove();
  },

  name: "De-Nitro",
  description: "Removes everything Nitro related.",
  author: "Liam The Protogen",
  version,
};

obj
