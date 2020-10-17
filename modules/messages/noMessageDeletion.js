let version = '3.0.0';

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

const getWantedHandler = (mod) => mod._orderedActionHandlers.MESSAGE_DELETE.find((x) => x.actionHandler.toString().includes('revealedMessageId'));

const setup = () => {
  const mod = globalThis.webpackModules.findByProps('register');

  try {
    original = getWantedHandler(mod);
  } catch (e) {
    //globalThis.showToast('No Message Deletion: Setup failed, retrying...');
    return setTimeout(setup, 3000);
  }

  mod._orderedActionHandlers.MESSAGE_DELETE[mod._orderedActionHandlers.MESSAGE_DELETE.indexOf(getWantedHandler(mod))] = {
    actionHandler: (obj) => {
      // console.log(obj);

      if (deleted.find((x) => x.id === obj.id)) { return; }
      
      deleted.push(obj);

      styleMessage(obj);
    },

    storeDidChange: function() { }
  };

  // globalThis.showToast('No Message Deletion: Ready');
};

let obj = {
  onImport: async function () {
  },

  onLoadingFinished: async function () {
    interval = setInterval(run, 300);

    setTimeout(setup, 5000);
  },

  remove: async function () {
    clearInterval(interval);

    for (let e of document.getElementsByClassName('gm-deleted-message')) {
      e.remove();
    }

    globalThis.webpackModules.findByProps('register')._orderedActionHandlers.MESSAGE_DELETE[4] = original;

    globalThis.showToast('No Message Deletion: Deleted messages may be left behind');
  },

  logRegionColor: 'darkred',

  name: 'No Message Deletion',
  description: 'Messages only turn red instead of completely disappearing',

  author: 'Ducko',

  version
};

obj