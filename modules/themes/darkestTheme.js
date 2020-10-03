let version = '1.0.0';

let obj = {
  onImport: async function () {
    sheet.insertRule(`html > body.theme-darkest {
      --background-primary: #000;
      --background-secondary: #050505;
      --background-secondary-alt: #000;
      --background-tertiary: #080808;

      --channeltextarea-background: #080808;

      --background-accent: #111;
      --background-floating: #080808;
    }`, sheet.cssRules.length);

    document.body.classList.add('theme-darkest');
  },

  remove: async function () {
    document.body.classList.remove('theme-darkest');
  },

  logRegionColor: 'darkred',

  name: 'Darkest Theme',
  description: 'Pure dark theme',

  author: 'Ducko',

  version
};

obj