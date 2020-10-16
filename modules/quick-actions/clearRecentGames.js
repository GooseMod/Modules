let version = '1.0.0';

let obj = {
  onImport: async function () {
    if (window.localStorage === undefined) {
      alert('Clear Recent Games: Could not find localStorage, will not work')
    }
  },

  onLoadingFinished: async function () {
    globalThis.settings.createItem('Clear Recent Games', [''], async () => {
      if (!(await globalThis.confirmDialog('Clear', 'Clear Recent Games', 'Are you sure you want to clear your recent games?'))) {
        return;
      }

      let c = JSON.parse(localStorage.getItem('RunningGameStore'));

      c.gamesSeen = [];

      localStorage.setItem('RunningGameStore', JSON.stringify(c));

      if (await globalThis.confirmDialog('Reload', 'Reload Discord', 'To actually update the recent games after clearing it, Discord requires a reload. Without it, it will still look like recent games have not been cleared. This will also uninstall GooseMod due to reloading.')) {
        window.location.reload();
      }
    });
  },

  remove: async function () {
    let settingItem = globalThis.settings.items.find((x) => x[1] === 'Clear Recent Games');
    globalThis.settings.items.splice(globalThis.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkred',

  name: 'Clear Recent Games',
  description: 'Adds setting button which clears recent games (in "Game Activity")',

  author: 'Ducko',

  version
};

obj