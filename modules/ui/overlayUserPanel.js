let version = '2.0.1';

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

      padding: 3px;
      border-radius: 4px;
      transform: scale(1.3) translate(20%, -146%);

      background-color: var(--background-secondary-alt);

      z-index: 1;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.user-panel-columns [aria-label="User area"] .wrapper-24pKcD {
      margin-bottom: 47px;
      z-index: 2;
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