let version = '1.0.0';

if (typeof window === 'undefined' || typeof window.Audio === 'undefined') { // JSON API generator evals
  global.window = {Audio: {}};
}

let _Audio = window.Audio;

let enabled = true;

let fileSelectEl, incomingCallSound, outgoingCallSound;

const getFileUpload = async () => {
  fileSelectEl.click();

  await new Promise((res) => {
    fileSelectEl.onchange = () => {
      res();
    };
  });

  const file = fileSelectEl.files[0];
          
  if (file === undefined) {
    return undefined;
  }

  return file;
};

let obj = {
  onImport: async function() {
    this.logger.debug('customSounds', 'Overriding Audio with a proxy function');

    window.Audio = function() {
      var audio = new _Audio();
    
      var _play = audio.play;
      audio.play = function() {
          if (enabled) {
            if (outgoingCallSound && this.src.includes('/assets/c6e92752668dde4eee5923d70441579f.mp3')) { // Outgoing Call
              this.src = outgoingCallSound;
            }

            if (incomingCallSound && this.src.includes('/assets/84a1b4e11d634dbfa1e5dd97a96de3ad.mp3')) { // Incoming Call
              this.src = incomingCallSound;
            }
          }

          return _play.apply(this, arguments);
      }
    
      return audio;
    };
  },

  onLoadingFinished: async function() {
    fileSelectEl = document.createElement('input');
    fileSelectEl.type = 'file';

    fileSelectEl.accept = 'sound/*';
    fileSelectEl.style.display = 'none';

    document.body.appendChild(fileSelectEl);

    let items = [
      {
        type: 'text-and-button',
        text: 'Incoming Call',
        subtext: 'Not uploaded',
        buttonText: 'Upload',
        onclick: async (el) => {
          el.textContent = 'Uploading...';

          const file = await getFileUpload();
          incomingCallSound = file === undefined ? undefined : URL.createObjectURL(file);

          items[0].subtext = file === undefined ? 'Not uploaded' : `Uploaded: ${file.name}`;

          this.settings.createFromItems();
          this.openSettingItem('Custom Sounds');
        }
      },
      {
        type: 'text-and-button',
        text: 'Outgoing Call',
        subtext: 'Not uploaded',
        buttonText: 'Upload',
        onclick: async (el) => {
          el.textContent = 'Uploading...';

          const file = await getFileUpload();
          outgoingCallSound = file === undefined ? undefined : URL.createObjectURL(file);

          items[1].subtext = file === undefined ? 'Not uploaded' : `Uploaded: ${file.name}`;

          this.settings.createFromItems();
          this.openSettingItem('Custom Sounds');
        }
      }
    ];

    this.settings.createItem('Custom Sounds', [
      `(v${version})`,

      {
        type: 'toggle',
        text: 'Custom Sounds Enabled',
        onToggle: (c) => { enabled = c; },
        isToggled: () => enabled
      },

      {
        type: 'header',
        text: 'Sounds'
      },

      ...items
    ]);
  },

  remove: async function() {
    enabled = false;

    window.Audio = _Audio;
    
    fileSelectEl.remove();

    let settingItem = this.settings.items.find((x) => x[1] === 'Custom Sounds');
    this.settings.items.splice(this.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkblue',

  name: 'Custom Sounds',
  description: 'Allows uploading of custom call sounds',

  author: 'Ducko',

  version
};

obj