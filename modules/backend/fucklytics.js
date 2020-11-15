let version = '2.0.0';

let blocking = {
  'science': true,
  'sentry': true
};

let originals = {
  'analytics': undefined,
  'crash': undefined
};

const setAnalytics = (val) => {
  if (!val) enableAnalytics();
    else disableAnalytics();
};

const enableAnalytics = () => {
  const analyticsMod = goosemodScope.webpackModules.findByProps('getSuperPropertiesBase64');

  analyticsMod.track = originals.analytics;

  const crashMod = goosemodScope.webpackModules.findByProps('submitLiveCrashReport');

  crashMod.submitLiveCrashReport = originals.crash;
};

const disableAnalytics = () => {
  const analyticsMod = goosemodScope.webpackModules.findByProps('getSuperPropertiesBase64');

  originals.analytics = analyticsMod.track;
  analyticsMod.track = () => {};

  const crashMod = goosemodScope.webpackModules.findByProps('submitLiveCrashReport');

  originals.crash = crashMod.submitLiveCrashReport;
  crashMod.submitLiveCrashReport = () => {};
};

const setSentry = (val) => {
  if (!val) enableSentry();
    else disableSentry();
};

const enableSentry = () => {
  window.__SENTRY__.hub.getClient().getOptions().enabled = true;
};

const disableSentry = () => {
  window.__SENTRY__.hub.getClient().getOptions().enabled = false;
};

let obj = {
  onImport: async function() {
    setAnalytics(blocking.science);
    setSentry(blocking.sentry);
  },

  onLoadingFinished: async function() {
    goosemodScope.settings.createItem('Fucklytics', [
      `(v${version})`,

      {
        type: 'header',
        text: 'What to block'
      },

      {
        type: 'toggle',
        text: 'Science (Discord API)',
        subtext: 'Discord\'s own analytics, most used.',
        onToggle: (c) => {
          blocking.science = c;
          setAnalytics(c);
        },
        isToggled: () => blocking.science
      },

      {
        type: 'toggle',
        text: 'Sentry',
        subtext: 'Used to track console / JS errors.',
        onToggle: (c) => {
          blocking.sentry = c;
          setSentry(c);
        },
        isToggled: () => blocking.sentry
      }
    ]);
  },

  remove: async function() {
    try {
      enableAnalytics();
      enableSentry();
    } catch (e) {}

    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Fucklytics');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  getSettings: () => [true, blocking], // Keep enabled setting at first element for backwards compatibility with <2.0.0
  loadSettings: ([_enabled, _blocking]) => {
    blocking = _blocking;

    setAnalytics(blocking.science);
    setSentry(blocking.sentry);
  },

  logRegionColor: 'darkblue',

  name: 'Fucklytics',
  description: 'Blocks Discord (Science) analytics and Sentry',

  author: 'Ducko',

  version
};

obj