let version = '2.5.1';

let obj = {
  onImport: async function () {
    this.logger.debug('visualTweaks', 'Enabling Visual Tweaks');

    this.tweaks = {
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

    this.enableTweak = (tweakName) => {
      tweakFunctions[tweakName].enable();

      this.tweaks[tweakName] = true;
    };

    this.disableTweak = (tweakName) => {
      tweakFunctions[tweakName].disable();

      this.tweaks[tweakName] = false;
    };

    this.setTweak = (tweakName, value) => {
      if (value === true) {
        this.enableTweak(tweakName);
      } else {
        this.disableTweak(tweakName);
      }
    };
  },

  onLoadingFinished: async function () {
    for (let t in this.tweaks) {
      if (this.tweaks[t] === true) this.enableTweak(t);
    }

    this.settings.createItem('Visual Tweaks', [
      `(v${version})`,

      {
        type: 'header',
        text: 'Individual Minor Tweaks'
      },
      {
        type: 'toggle',
        text: 'Hide Help Button',
        subtext: 'Hides the help button in the top right corner',
        onToggle: (c) => { this.setTweak('removeHelpButton', c); },
        isToggled: () => this.tweaks['removeHelpButton']
      },
      {
        type: 'toggle',
        text: 'Disable Emoji Click Pop-up',
        subtext: 'Disables the pop-up when clicking emojis',
        onToggle: (c) => { this.setTweak('removeEmojiUpsell', c); },
        isToggled: () => this.tweaks['removeEmojiUpsell']
      },
      {
        type: 'toggle',
        text: 'Square Avatars',
        subtext: 'Makes avatars for messages square instead of circle (cozy only)',
        onToggle: (c) => { this.setTweak('squareAvatars', c); },
        isToggled: () => this.tweaks['squareAvatars']
      },
      {
        type: 'toggle',
        text: '[WIP] No Member List Avatars',
        subtext: 'Hides avatars in the member list',
        onToggle: (c) => { this.setTweak('noMemberlistAvatars', c); },
        isToggled: () => this.tweaks['noMemberlistAvatars']
      }
    ]);
  },

  remove: async function () {
    for (let t in this.tweaks) {
      if (this.tweaks[t] === true) this.disableTweak(t);
    }

    let settingItem = this.settings.items.find((x) => x[1] === 'Visual Tweaks');
    this.settings.items.splice(this.settings.items.indexOf(settingItem), 1);
  },

  getSettings: async function() { return [this.tweaks] },
  loadSettings: async function ([_tweaks]) {
    this.tweaks = _tweaks;

    for (let t in this.tweaks) {
      try { // Some tweaks might have been removed so wrap in try catch
        this.setTweak(t, this.tweaks[t]);
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