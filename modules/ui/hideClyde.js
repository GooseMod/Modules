const version = '1.0.0';

let el;

const css = `.ephemeral-1PsL1r {
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

  name: 'Hide Clyde',
  description: 'Hides all Clyde messages completely',

  author: 'Ducko',

  version
};

obj
