const version = '1.0.2';

let obj = {
  onImport: async function () {
  },

  onLoadingFinished: async function () {
    let electronInfo = goosemodScope.webpackModules.findByProps('ua');

    let moduleItems = [];
    let moduleVersions = goosemodScope.webpackModules.findByProps('moduleVersions').moduleVersions;

    for (let m in moduleVersions) {
      moduleItems.push({
        type: 'text',
        text: m,
        subtext: moduleVersions[m]
      });
    }

    goosemodScope.settings.createItem('Discord Debug', [
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
    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Discord Debug');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkred',

  name: 'Discord Debug',
  description: 'Setting option with debug information about Discord',

  author: 'Ducko (506482395269169153)',

  version
};

obj
