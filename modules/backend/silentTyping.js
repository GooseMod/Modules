const version = '1.0.1';

let orig;

let obj = {
  onImport: async function () {
    let mod = this.webpackModules.findByProps('startTyping');
    orig = mod.startTyping;

    mod.startTyping = () => {};
  },

  onLoadingFinished: async function () {
    this.webpackModules.findByProps('startTyping').startTyping = orig;
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