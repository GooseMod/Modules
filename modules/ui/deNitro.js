const version = "1.0.1";

let style;
const css = `.buttons-3JBrkn > button, .channel-2QD9_O[href="/store"], .item-PXvHYJ[aria-controls="Discord Nitro-tab"], .wrapper-3nSjSv, .giftAction-yhDLaW, .upsellFooter-3coAfO, .buttons-3JBrkn > .buttonContainer-28fw2U > [aria-label="Open sticker picker"], .navItem-3Wp_oJ[aria-controls="sticker-picker-tab-panel"] {
  display: none;
}`;

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(css));
  },

  remove: async () => {
    style.remove();
  },

  name: "De-Nitro",
  description: "Removes everything Nitro related.",
  author: "Liam The Protogen (441384103946878987)",
  version,
};

obj
