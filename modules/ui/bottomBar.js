const version = '1';

let el;

const css = `@import url("https://raw.githack.com/LuckFire/BottomBar/master/bottombar.css");`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'Bottom Bar',
  description: 'A nice, simple looking, bottom bar. Inspired by CapnKitten\'s Spotify Discord theme.',

  author: 'LuckFire',

  version
};

obj
