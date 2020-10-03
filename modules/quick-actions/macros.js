let originalFunc;

let macros = {};

let version = '1.0.1';

let obj = {
  onImport: async function () {
    let mod = this.webpackModules.findByProps("jumpToMessage", "_sendMessage");
    originalFunc = mod.sendMessage;

    let goosemodScope = this;

    mod.sendMessage = function (_, message) {//_, [, message]) {
      if (message.content.startsWith('/m')) {
        let rpl = message.content.replace('/m ', '');
        let name = rpl.split(' ')[0];
        let content = rpl.split(' ').slice(1).join(' ');

        if (!content) {
          if (!macros[name]) {
            goosemodScope.showToast(`No macro "${name}"`);

            return;
          }

          message.content = macros[name];
        } else {
          macros[name] = content;

          goosemodScope.showToast(`Macro "${name}" saved`);

          return;
        }
      }
      
      return originalFunc.apply(this, arguments);
    };
  },

  remove: async function () {
    this.webpackModules.findByProps("jumpToMessage", "_sendMessage").sendMessage = originalFunc;
  },

  getSettings: () => [macros],
  loadSettings: ([_macros]) => {
    macros = _macros;
  },

  logRegionColor: 'darkred',

  name: 'Macros',
  description: 'Allows setting and sending of macros via /m name [value]',

  author: 'Ducko',

  version
};

obj