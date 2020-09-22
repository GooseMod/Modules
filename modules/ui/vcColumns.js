const version = '1.0.2';

let enabled = false;
let autoCheck = true;

const run = () => {
  if (!autoCheck) return;

  if (document.getElementsByClassName('rtcConnectionStatus-2-jIsi')[0]) {
    if (!document.body.classList.contains('voice-mode') && !enabled) { 
      enabled = true;

      setEnabled();
    }
  } else if (document.body.classList.contains('voice-mode') && enabled) {
    enabled = false;

    setEnabled();
  }
};

const setEnabled = () => {
  if (enabled && !document.body.classList.contains('voice-mode')) {
    document.body.classList.add('voice-mode');
  } else if (!enabled) {
    document.body.classList.remove('voice-mode');
  }
};

const obj = {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`body.voice-mode .container-2Rl01u, body.voice-mode .chat-3bRxxu {
      display: inherit;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.voice-mode .sidebar-2K8pFh {
      width: 100%;
      height: 65vh;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.voice-mode .content-98HsJk {
      flex-direction: column;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.voice-mode [aria-label="User area"] .nameTag-3uD-yy + .directionRow-3v3tfG {
      transform: scale(1.5) translate(-50%, -190%);

      position: absolute;
      left: 50vw;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.voice-mode [aria-label="Disconnect"] {
      transform: scale(1.5) translate(-10%, 0);
    }`, sheet.cssRules.length);
  },

  onLoadingFinished: async function () {
    this.settings.createItem('VC Columns', [
      `(v${version})`,

      {
        type: 'toggle',
        text: 'Auto-enable',
        subtext: 'Automatically enables when entering voice chat (and disables when leaving)',
        onToggle: (c) => {
          autoCheck = c;
        },
        isToggled: () => autoCheck
      },
    ]);

    interval = setInterval(run, 500);
  },

  remove: async function () {
    clearInterval(interval);

    let settingItem = this.settings.items.find((x) => x[1] === 'Voice Mode');
    this.settings.items.splice(this.settings.items.indexOf(settingItem), 1);

    enabled = false;
    autoCheck = false;

    setEnabled();
  },

  logRegionColor: 'darkred',

  name: 'VC Columns',
  description: 'A column UI with larger buttons for VC',

  author: 'Ducko',

  version
};

obj