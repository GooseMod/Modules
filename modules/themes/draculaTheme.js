let version = '1.0.0';

let obj = {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`html > body.theme-dracula {
      --background-primary: #181920;
      --background-secondary: #1C1D25;
      --background-secondary-alt: #16171D;
      --background-tertiary: #1F2029;

      --channeltextarea-background: #1F2029;
      --background-message-hover: rgba(255,255,255,0.025);

      --background-accent: #22232E;
      --background-floating: #1F2029;

      --scrollbar-thin-thumb: #22232E;
      --scrollbar-auto-thumb: #22232E;
      --scrollbar-auto-scrollbar-color-thumb: #22232E;

      --scrollbar-auto-track: #16171D;
      --scrollbar-auto-scrollbar-color-track: #16171D;
    }`, sheet.cssRules.length);

    document.body.classList.add('theme-dracula');
  },

  remove: async function () {
    document.body.classList.remove('theme-dracula');
  },

  logRegionColor: 'darkred',

  name: 'Dracula Theme',
  description: 'Pure dark theme',

  author: 'Ducko',

  version
};

obj