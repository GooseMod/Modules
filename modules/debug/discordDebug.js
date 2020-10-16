const version = '1.0.1';

let obj = {
  onImport: async function () {
  },

  onLoadingFinished: async function () {
    let electronInfo = globalThis.webpackModules.findByProps('ua');

    let moduleItems = [];
    let moduleVersions = globalThis.webpackModules.findByProps('moduleVersions').moduleVersions;

    for (let m in moduleVersions) {
      moduleItems.push({
        type: 'text',
        text: m,
        subtext: moduleVersions[m]
      });
    }

    globalThis.settings.createItem('Discord Debug', [
      `(v${version})`,

      {
        type: 'header',
        text: 'Electron Information'
      },

      {
        type: 'text',
        text: 'Electron',
        subtext: electronInfo.description
      },
      {
        type: 'text',
        text: 'User Agent',
        subtext: electronInfo.ua
      },
      {
        type: 'text',
        text: 'OS',
        subtext: electronInfo.os.toString()
      },

      {
        type: 'header',
        text: 'Discord (Native) Modules'
      },

      ...moduleItems
    ]);
  },

  remove: async function () {
    let settingItem = globalThis.settings.items.find((x) => x[1] === 'Discord Debug');
    globalThis.settings.items.splice(globalThis.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkred',

  name: 'Discord Debug',
  description: 'Setting option with debug information about Discord',

  author: 'Ducko',

  version
};

obj