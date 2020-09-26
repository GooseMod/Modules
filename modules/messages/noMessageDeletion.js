let version = '2.0.1';

let original;
let interval;
let deleted = [];

const styleMessage = async ({ id }) => {
  let el = document.getElementById(`chat-messages-${id}`);
  if (!el) return;

  if (el.classList.contains('gm-deleted-message')) return;

  el.classList.add('gm-deleted-message');
  el.style.backgroundColor = 'rgba(240, 71, 71, 0.1)';
};

const run = () => {
  for (let obj of deleted) {
    styleMessage(obj);
  }
};

let obj = {
  onImport: async function () {
  },

  onLoadingFinished: async function () {
    interval = setInterval(run, 300);

    let mod = this.webpackModules.findByProps('register');
    original = mod._orderedActionHandlers.MESSAGE_DELETE[4];

    mod._orderedActionHandlers.MESSAGE_DELETE[4] = {
      actionHandler: (obj) => {
        deleted.push(obj);

        styleMessage(obj);
      },

      storeDidChange: function() { }
    };
  },

  remove: async function () {
    clearInterval(interval);

    for (let e of document.getElementsByClassName('gm-deleted-message')) {
      e.remove();
    }

    this.webpackModules.findByProps('register')._orderedActionHandlers.MESSAGE_DELETE[4] = original;

    for (let obj of deleted) {
      await original.actionHandler(obj);
      await original.storeDidChange(obj);
    }
  },

  logRegionColor: 'darkred',

  name: 'No Message Deletion',
  description: 'Messages only turn red instead of completely disappearing',

  author: 'Ducko',

  version
};

obj