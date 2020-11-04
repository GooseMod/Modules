const version = '0';

let el;

const css = `@import url("https://raw.githack.com/LuckFire/RevampedUserArea/main/index.css");`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'RevampedUserArea',
  description: 'A compact, better looking user area.',

  author: 'LuckFire',

  version
};

obj