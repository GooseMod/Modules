let version = '1.2.4';

let enabled = true;

let blocking = {
  'science': true,
  'sentry': true
};

if (typeof window === 'undefined' || typeof window.XMLHttpRequest === 'undefined') { // JSON API generator evals
  global.window = {XMLHttpRequest: {}};
}

let _XMLHttpRequest = window.XMLHttpRequest;

let obj = {
  onImport: async function() {
    goosemodScope.logger.debug('fucklytics', 'Overriding XMLHTTPRequest with a proxy function');

    window.XMLHttpRequest = function() {
      var xhr = new _XMLHttpRequest();
  
      var _open = xhr.open;
      xhr.open = function() {
        //console.log(this, arguments, arguments[1], arguments[1].includes('science'));
        if (enabled) {
          if (blocking['science'] === true && arguments[1].includes('/v8/science')) {
            goosemodScope.logger.debug('fucklytics', 'Blocked analytics request (science)');

            return false;
          }

          if (blocking['sentry'] === true && arguments[1].includes('https://sentry.io')) {
            goosemodScope.logger.debug('fucklytics', 'Blocked analytics request (sentry)');

            return false;
          }
        }

        return _open.apply(this, arguments);
      };
  
      return xhr;
    }
  },

  onLoadingFinished: async function() {
    goosemodScope.settings.createItem('Fucklytics', [
      `(v${version})`,

      {
        type: 'toggle',
        text: 'Fucklytics Enabled',
        onToggle: (c) => { enabled = c; },
        isToggled: () => enabled
      },

      {
        type: 'header',
        text: 'Types to Block'
      },

      {
        type: 'toggle',
        text: 'Science (Discord API)',
        subtext: 'Discord\'s own analytics, most used',
        onToggle: (c) => { blocking['science'] = c; },
        isToggled: () => blocking['science']
      },
      {
        type: 'toggle',
        text: 'Sentry.io',
        subtext: 'Used to track console / JS errors',
        onToggle: (c) => { blocking['sentry'] = c; },
        isToggled: () => blocking['sentry']
      }
    ]);
  },

  remove: async function() {
    window.XMLHttpRequest = _XMLHttpRequest;

    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Fucklytics');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  getSettings: () => [blocking, enabled],
  loadSettings: ([_blocking, _enabled]) => {
    blocking = _blocking;
    enabled = _enabled;
  },

  logRegionColor: 'darkblue',

  name: 'Fucklytics',
  description: 'Blocks analytics',

  author: 'Ducko',

  version
};

obj