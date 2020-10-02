let version = '1.0.0';

if (typeof window === 'undefined' || typeof window.document === 'undefined') { // JSON API generator evals
  global.window = { document: { styleSheets: [0] } };
}

let sheet = window.document.styleSheets[0];


let obj = {
  onImport: async function () {
    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .container-3baos1 {
      flex-wrap: wrap;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .avatarWrapper-2yR4wp {
      transform: translate(0, 35%);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .nameTag-3uD-yy {
      width: 80%;
      flex-grow: 0;

      transform: translate(0, 35%);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .nameTag-3uD-yy + .directionRow-3v3tfG {
      margin: auto;

      transform: translate(45%, -190%);

      background-color: var(--background-secondary-alt);

      z-index: 99999;
    }`, sheet.cssRules.length);

    document.body.classList.add('user-panel-columns');
  },

  remove: async function () {
    document.body.classList.remove('user-panel-columns');
  },

  logRegionColor: 'darkred',

  name: 'Overlay User Panel',
  description: 'Overlays user panel buttons (mute, deafen, etc.) to above the user panel to the right',

  author: 'Ducko',

  version
};

obj