let version = '1.0.2';

let obj = {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`html > body.theme-darker {
      --background-primary: #000;
      --background-secondary: #111;
      --background-secondary-alt: #000;
      --background-tertiary: #222;

      --channeltextarea-background: #111;
      --background-message-hover: rgba(255,255,255,0.025);

      --background-accent: #222;
      --background-floating: #111;
    }`, sheet.cssRules.length);

    document.body.classList.add('theme-darker');
  },

  remove: async function () {
    document.body.classList.remove('theme-darker');
  },

  logRegionColor: 'darkred',

  name: 'Darker Theme',
  description: 'Darker theme but still with contrast',

  author: 'Ducko',

  version
};

obj