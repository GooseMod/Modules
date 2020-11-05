const version = '0';

let el;

const css = `@import url("https://raw.githack.com/Discord-Custom-Covers/usrbg/master/snippets/modals.css"); @import url("https://raw.githack.com/Discord-Custom-Covers/usrbg/master/snippets/userPopouts.css");`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'Usrbg - Default',
  description: '[Default Snippets] A pure CSS database of user requested backgrounds for Discord.',

  author: 'Discord Custom Covers',

  version
};

obj