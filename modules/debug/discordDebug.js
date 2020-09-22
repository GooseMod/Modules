const version = '1.0.0';

let obj = {
  onImport: async function () {
  },

  onLoadingFinished: async function () {
    let electronInfo = this.webpackModules.findByProps('ua');

    let moduleItems = [];
    let moduleVersions = this.webpackModules.findByProps('moduleVersions').moduleVersions;

    for (let m in moduleVersions) {
      moduleItems.push({
        type: 'text',
        text: m,
        subtext: moduleVersions[m]
      });
    }

    this.settings.createItem('Discord Debug', [
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
    let settingItem = this.settings.items.find((x) => x[1] === 'Discord Debug');
    this.settings.items.splice(this.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkred',

  name: 'Discord Debug',
  description: 'Setting option with debug information about Discord',

  author: 'Ducko',

  version
};

obj