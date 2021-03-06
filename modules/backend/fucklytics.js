let version = '2.1.0';

let blocking = {
  'compat': '2.1.0',

  'science': true,
  'sentry': true,
  'crash': true
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
};

const disableAnalytics = () => {
  const analyticsMod = goosemodScope.webpackModules.findByProps('getSuperPropertiesBase64');

  originals.analytics = analyticsMod.track;
  analyticsMod.track = () => {};
};

const setCrash = (val) => {
  if (!val) enableCrash();
    else disableCrash();
};

const enableCrash = () => {
  const crashMod = goosemodScope.webpackModules.findByProps('submitLiveCrashReport');

  crashMod.submitLiveCrashReport = originals.crash;
};

const disableCrash = () => {
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
    setCrash(blocking.crash);
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
        text: 'Crash Reports',
        subtext: 'Automatically sends Discord a crash report on crash (without your consent).',
        onToggle: (c) => {
          blocking.crash = c;
          setCrash(c);
        },
        isToggled: () => blocking.crash
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
      enableCrash();
    } catch (e) {}

    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Fucklytics');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  getSettings: () => [blocking],
  loadSettings: ([_blocking]) => {
    if (_blocking.compat !== version) return;

    blocking = _blocking;

    setAnalytics(blocking.science);
    setSentry(blocking.sentry);
    setCrash(blocking.crash);
  },

  name: 'Fucklytics',
  description: 'Blocks Discord (Science) analytics, crash reports and Sentry',

  author: 'Ducko',

  version
};

obj