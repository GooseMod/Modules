let version = '0';

let el;

const css = `@import url("https://raw.githack.com/DiscordStyles/Slate/master/Slate.theme.css");`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'Slate Theme',
  description: 'An optimized, consistent, and functional theme for Discord based on GitHub\'s design language.',

  author: ['Gibbu', 'Tropical'],

  version
};

obj
