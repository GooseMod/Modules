const version = '0';

let el;

const css = `@import url("https://raw.githack.com/LuckFire/BetterChannelIndicators/main/indicators.css");`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'Better Channel Indicators',
  description: 'Adds a nice touch to Discord\'s current channel indicators.',

  author: 'LuckFire',

  version
};

obj