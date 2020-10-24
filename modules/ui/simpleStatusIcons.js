let version = '1.0.0';

let obj = {
  onImport: async function () {
    let sheet = window.document.styleSheets[0];

    sheet.insertRule(`body.simple-status-icons .pointerEvents-2zdfdO:not([mask="url(#svg-mask-status-online-mobile)"]) {
      mask: url(#svg-mask-status-online) !important;
    }`, sheet.cssRules.length);

    document.body.classList.add('simple-status-icons');
  },

  remove: async function () {
    document.body.classList.remove('simple-status-icons');
  },

  name: 'Simple Status Icons',
  description: 'Makes all status icons circular instead of shapes for Idle and Do Not Disturb (but keeps mobile a phone outline)',

  author: 'Ducko',

  version
};

obj