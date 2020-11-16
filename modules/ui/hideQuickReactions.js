const version = '1.0.0';

let el;

const css = `.wrapper-3_530D { display: none; }`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'Hide Quick Reactions',
  description: 'Hides the quick reactions (top 4 emoji) on the message context menus',

  author: 'Ducko',

  version
};

obj