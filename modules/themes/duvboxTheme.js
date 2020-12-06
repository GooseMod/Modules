const version = '1';

let el;

const css = `@import url("https://raw.githack.com/CircuitRCAY/Duvbox/master/duvbox.css");`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'Duvbox Theme',
  description: 'Based on the Vim theme, named Gruvbox.',

  author: 'CircuitRCAY',

  version
};

obj
