const version = '1.0.2';

let orig;

let obj = {
  onImport: async function () {
    let mod = globalThis.webpackModules.findByProps('startTyping');
    orig = mod.startTyping;

    mod.startTyping = () => {};
  },

  onLoadingFinished: async function () {
    globalThis.webpackModules.findByProps('startTyping').startTyping = orig;
  },

  remove: async function () {
  },

  logRegionColor: 'darkred',

  name: 'Silent Typing',
  description: 'Makes Discord not send your typing indicator',

  author: 'Ducko',

  version
};

obj