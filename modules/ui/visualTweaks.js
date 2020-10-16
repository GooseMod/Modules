let version = '2.5.1';

let obj = {
  onImport: async function () {
    globalThis.logger.debug('visualTweaks', 'Enabling Visual Tweaks');

    globalThis.tweaks = {
      'removeHelpButton': true,
      'removeEmojiUpsell': false,
      'squareAvatars': true,
      'noMemberlistAvatars': false
    };

    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`body.square-avatars .avatar-1BDn8e {
      border-radius: 0px;
    }`, sheet.cssRules.length);


    sheet.insertRule(`body.no-emoji-popups .container-ZRw2kD {
      display:none;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.no-emoji-popups .emojiContainer-3X8SvE {
      cursor:default;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.no-memberlist-avatars .avatar-3uk_u9 {
      width: 5px;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.no-memberlist-avatars .avatar-3uk_u9 > div > svg > foreignObject {
      display: none;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.no-memberlist-avatars .avatar-3uk_u9 > div > svg > rect {
      transform: translate(-22px, -10px);
    }`, sheet.cssRules.length);

    let tweakFunctions = {
      'removeHelpButton': {
        enable: () => {
          document.querySelector('a[href="https://support.discord.com"] > div[role="button"]').parentElement.style.display = 'none';
        },

        disable: () => {
          document.querySelector('a[href="https://support.discord.com"] > div[role="button"]').parentElement.style.display = 'flex';
        }
      },

      'removeEmojiUpsell': {
        enable: () => {
          document.body.classList.add('no-emoji-popups');
        },

        disable: () => {
          document.body.classList.remove('no-emoji-popups');
        }
      },

      'squareAvatars': {
        enable: () => {
          document.body.classList.add('square-avatars');
        },

        disable: () => {
          document.body.classList.remove('square-avatars');
        }
      },

      'noMemberlistAvatars': {
        enable: () => {
          document.body.classList.add('no-memberlist-avatars');
        },

        disable: () => {
          document.body.classList.remove('no-memberlist-avatars');
        }
      }
    };

    globalThis.enableTweak = (tweakName) => {
      tweakFunctions[tweakName].enable();

      globalThis.tweaks[tweakName] = true;
    };

    globalThis.disableTweak = (tweakName) => {
      tweakFunctions[tweakName].disable();

      globalThis.tweaks[tweakName] = false;
    };

    globalThis.setTweak = (tweakName, value) => {
      if (value === true) {
        globalThis.enableTweak(tweakName);
      } else {
        globalThis.disableTweak(tweakName);
      }
    };
  },

  onLoadingFinished: async function () {
    for (let t in globalThis.tweaks) {
      if (globalThis.tweaks[t] === true) globalThis.enableTweak(t);
    }

    globalThis.settings.createItem('Visual Tweaks', [
      `(v${version})`,

      {
        type: 'header',
        text: 'Individual Minor Tweaks'
      },
      {
        type: 'toggle',
        text: 'Hide Help Button',
        subtext: 'Hides the help button in the top right corner',
        onToggle: (c) => { globalThis.setTweak('removeHelpButton', c); },
        isToggled: () => globalThis.tweaks['removeHelpButton']
      },
      {
        type: 'toggle',
        text: 'Disable Emoji Click Pop-up',
        subtext: 'Disables the pop-up when clicking emojis',
        onToggle: (c) => { globalThis.setTweak('removeEmojiUpsell', c); },
        isToggled: () => globalThis.tweaks['removeEmojiUpsell']
      },
      {
        type: 'toggle',
        text: 'Square Avatars',
        subtext: 'Makes avatars for messages square instead of circle (cozy only)',
        onToggle: (c) => { globalThis.setTweak('squareAvatars', c); },
        isToggled: () => globalThis.tweaks['squareAvatars']
      },
      {
        type: 'toggle',
        text: '[WIP] No Member List Avatars',
        subtext: 'Hides avatars in the member list',
        onToggle: (c) => { globalThis.setTweak('noMemberlistAvatars', c); },
        isToggled: () => globalThis.tweaks['noMemberlistAvatars']
      }
    ]);
  },

  remove: async function () {
    for (let t in globalThis.tweaks) {
      if (globalThis.tweaks[t] === true) globalThis.disableTweak(t);
    }

    let settingItem = globalThis.settings.items.find((x) => x[1] === 'Visual Tweaks');
    globalThis.settings.items.splice(globalThis.settings.items.indexOf(settingItem), 1);
  },

  getSettings: async function() { return [globalThis.tweaks] },
  loadSettings: async function ([_tweaks]) {
    globalThis.tweaks = _tweaks;

    for (let t in globalThis.tweaks) {
      try { // Some tweaks might have been removed so wrap in try catch
        globalThis.setTweak(t, globalThis.tweaks[t]);
      } catch (e) {
        console.log(e);
      }
    }
  },

  logRegionColor: 'darkred',

  name: 'Visual Tweaks',
  description: 'A variety of minor visual tweaks',

  author: 'Ducko + Fjorge',

  version
};

obj