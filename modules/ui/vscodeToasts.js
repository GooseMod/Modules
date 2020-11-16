const version = '1.0.0';

let el;

const css = `.gm-toast {
  position: absolute;
  right: 30px;
  bottom: 5px;

  box-shadow: var(--elevation-high);

  border-radius: 0;
  background: var(--channeltextarea-background);
  font-size: 20px;
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

  name: 'VSCode-like Toasts',
  description: 'Makes GooseMod toasts similar to VSCode\'s (in the bottom right above the message box and larger)',

  author: 'Ducko',

  version
};

obj