const version = '0';

let el;

const css = `@import url("https://raw.githack.com/Controlfreak707/PowerAnimations/master/theme.css");`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'PowerAnimations',
  description: 'Adds animations to lots of things.',

  author: 'Liam The Protogen',

  version
};

obj