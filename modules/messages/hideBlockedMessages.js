const version = '1.0.0';

let el;

const css = `.groupStart-23k01U:not(.message-2qnXI6) {
  display: none;
}`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'Hide Blocked Messages',
  description: 'Completely hides blocked messages',

  author: 'Ducko',

  version
};

obj
