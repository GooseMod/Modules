const version = '1.0.4';

let orig;

let obj = {
  onImport: async function () {
    let mod = goosemodScope.webpackModules.findByProps('startTyping');
    orig = mod.startTyping;

    mod.startTyping = () => {};
  },

  onLoadingFinished: async function () {
  },

  remove: async function () {
    goosemodScope.webpackModules.findByProps('startTyping').startTyping = orig;
  },

  logRegionColor: 'darkred',

  name: 'Silent Typing',
  description: 'Makes Discord not send your typing indicator',

  author: 'Ducko',

  version
};

obj