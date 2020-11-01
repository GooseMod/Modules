const version = '1.2.3';

const install = async () => {
  if (!(await goosemodScope.confirmDialog('Install', 'Install GooseMod Untethered', 'Are you sure you want to install GooseMod Untethered?'))) {
    return;
  }
};

const obj = {
  onImport: async function () {
  },

  onLoadingFinished: async function () {
    goosemodScope.settings.createItem('Untethered Manager', [
      `(v${version})`,

      {
        type: 'button',
        text: 'Install Untethered',
        onclick: install
      },
    ]);
  },

  remove: async function () {
    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Untethered Manager');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkred',

  name: 'Untethered Manager',
  description: 'Easy installation (and updating) of GooseMod Untethered',

  author: 'Ducko',

  version
};

obj
