let version = '1.3.3';

// .messagesWrapper-1sRNjr .markup-2BOw-j
let italicsEnabled = true; // <em>
let boldEnabled = true; // <strong>
let underlineEnabled = true; // <u>
let strikethroughEnabled = true; // <s>

let spoilerEnabled = true; // <.spoilerText-3p6IlD>

let inlineCodeEnabled = true; // <code.inline>
let quotesEnabled = true; // <div.blockquoteDivider-2hH8H6>

if (typeof window === 'undefined' || typeof window.document === 'undefined') { // JSON API generator evals
  global.window = { document: { styleSheets: [0] } };
}

let sheet = window.document.styleSheets[0];

function setItalics(c) {
  italicsEnabled = c;

  try {
    document.body.classList[c ? 'add' : 'remove']('gm-wysiwyg-italics-enabled');
  } catch (e) {
    console.log(e);
  }
}

function setBold(c) {
  boldEnabled = c;

  try {
    document.body.classList[c ? 'add' : 'remove']('gm-wysiwyg-bold-enabled');
  } catch (e) {
    console.log(e);
  }
}

function setUnderline(c) {
  underlineEnabled = c;

  try {
    document.body.classList[c ? 'add' : 'remove']('gm-wysiwyg-underline-enabled');
  } catch (e) {
    console.log(e);
  }
}

function setStrikethrough(c) {
  strikethroughEnabled = c;

  try {
    document.body.classList[c ? 'add' : 'remove']('gm-wysiwyg-strikethrough-enabled');
  } catch (e) {
    console.log(e);
  }
}

function setSpoiler(c) {
  spoilerEnabled = c;

  try {
    document.body.classList[c ? 'add' : 'remove']('gm-wysiwyg-spoiler-enabled');
  } catch (e) {
    console.log(e);
  }
}

function setInlineCode(c) {
  inlineCodeEnabled = c;

  try {
    document.body.classList[c ? 'add' : 'remove']('gm-wysiwyg-inline-enabled');
  } catch (e) {
    console.log(e);
  }
}

function setQuotes(c) {
  quotesEnabled = c;

  try {
    document.body.classList[c ? 'add' : 'remove']('gm-wysiwyg-quotes-enabled');
  } catch (e) {
    console.log(e);
  }
}

let obj = {
  onImport: async function () {
    sheet.insertRule(`body.gm-wysiwyg-italics-enabled .messagesWrapper-1sRNjr .markup-2BOw-j em::before, body.gm-wysiwyg-italics-enabled .messagesWrapper-1sRNjr .markup-2BOw-j em::after {
      content: '*';

      font-weight: 600;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.gm-wysiwyg-bold-enabled .messagesWrapper-1sRNjr .markup-2BOw-j strong::before, body.gm-wysiwyg-bold-enabled .messagesWrapper-1sRNjr .markup-2BOw-j strong::after {
      content: '**';

      font-weight: 600;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.gm-wysiwyg-underline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j u::before, body.gm-wysiwyg-underline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j u::after {
      content: '__';

      font-weight: 400;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.gm-wysiwyg-strikethrough-enabled .messagesWrapper-1sRNjr .markup-2BOw-j s::before, body.gm-wysiwyg-strikethrough-enabled .messagesWrapper-1sRNjr .markup-2BOw-j s::after {
      content: '~~';

      font-weight: 400;
      
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.gm-wysiwyg-spoiler-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .spoilerText-3p6IlD::before, body.gm-wysiwyg-spoiler-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .spoilerText-3p6IlD::after {
      content: '||';
      
      font-weight: 400;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.gm-wysiwyg-inline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j code.inline::before, body.gm-wysiwyg-inline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j code.inline::after {
      content: '\`';
      
      font-weight: 600;
      border-radius: 0 3px 3px 0
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.gm-wysiwyg-italics-enabled .messagesWrapper-1sRNjr .markup-2BOw-j em::before, body.gm-wysiwyg-bold-enabled .messagesWrapper-1sRNjr .markup-2BOw-j strong::before, body.gm-wysiwyg-underline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j u::before, body.gm-wysiwyg-strikethrough-enabled .messagesWrapper-1sRNjr .markup-2BOw-j s::before, body.gm-wysiwyg-spoiler-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .spoilerText-3p6IlD::before, body.gm-wysiwyg-inline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j code.inline::before {
      margin-right: 1px;

      letter-spacing: 0.004em;

      display: inline-block;
      text-decoration: none;
      font-style: normal;

      filter: brightness(0.5);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.gm-wysiwyg-italics-enabled .messagesWrapper-1sRNjr .markup-2BOw-j em::after, body.gm-wysiwyg-bold-enabled .messagesWrapper-1sRNjr .markup-2BOw-j strong::after, body.gm-wysiwyg-underline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j u::after, body.gm-wysiwyg-strikethrough-enabled .messagesWrapper-1sRNjr .markup-2BOw-j s::after, body.gm-wysiwyg-spoiler-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .spoilerText-3p6IlD::after, body.gm-wysiwyg-inline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j code.inline::after {
      margin-left: 1px;

      letter-spacing: 0.004em;

      display: inline-block;
      text-decoration: none;
      font-style: normal;

      filter: brightness(0.5);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.gm-wysiwyg-quotes-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .blockquoteContainer-U5TVEi .blockquoteDivider-2hH8H6 {
      width: 0;
      background-color: transparent;

      margin-right: 2px;
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.gm-wysiwyg-quotes-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .blockquoteContainer-U5TVEi .blockquoteDivider-2hH8H6::before {
      content: '>';

      color: var(--text-normal);

      filter: brightness(0.3);
      font-weight: 400;
      
      display: inline-block;
      text-decoration: none;
      font-style: normal;
    }`, sheet.cssRules.length);
  },

  onLoadingFinished: async function () {
    setItalics(true);
    setBold(true);
    setUnderline(true);
    setStrikethrough(true);
    setSpoiler(true);
    setInlineCode(true);
    setQuotes(true);

    goosemodScope.settings.createItem('WYSIWYG Messages', [
      `(v${version})`,

      {
        type: 'header',
        text: 'Specific Markdown Elements'
      },
      {
        type: 'toggle',
        text: 'Italics',
        subtext: '*Text*',
        onToggle: (c) => setItalics(c),
        isToggled: () => italicsEnabled
      },
      {
        type: 'toggle',
        text: 'Bold',
        subtext: '**Text**',
        onToggle: (c) => setBold(c),
        isToggled: () => boldEnabled
      },
      {
        type: 'toggle',
        text: 'Underline',
        subtext: '__Text__',
        onToggle: (c) => setUnderline(c),
        isToggled: () => underlineEnabled
      },
      {
        type: 'toggle',
        text: 'Strikethrough',
        subtext: '~~Text~~',
        onToggle: (c) => setStrikethrough(c),
        isToggled: () => strikethroughEnabled
      },
      {
        type: 'toggle',
        text: 'Spoilers',
        subtext: '||Text||',
        onToggle: (c) => setSpoiler(c),
        isToggled: () => spoilerEnabled
      },
      {
        type: 'toggle',
        text: 'Inline Code',
        subtext: '`Text`',
        onToggle: (c) => setInlineCode(c),
        isToggled: () => inlineCodeEnabled
      },
      {
        type: 'toggle',
        text: 'Quotes',
        subtext: '> Text',
        onToggle: (c) => setQuotes(c),
        isToggled: () => quotesEnabled
      }
    ]);
  },

  remove: async function () {
    setItalics(false);
    setBold(false);
    setUnderline(false);
    setStrikethrough(false);
    setSpoiler(false);
    setInlineCode(false);
    setQuotes(false);

    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'WYSIWYG Messages');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  getSettings: () => [italicsEnabled, boldEnabled, underlineEnabled, strikethroughEnabled, spoilerEnabled, inlineCodeEnabled, quotesEnabled],
  loadSettings: ([_italicsEnabled, _boldEnabled, _underlineEnabled, _strikethroughEnabled, _spoilerEnabled, _inlineCodeEnabled, _quotesEnabled]) => {
    setItalics(_italicsEnabled);
    setBold(_boldEnabled);
    setUnderline(_underlineEnabled);
    setStrikethrough(_strikethroughEnabled);
    setSpoiler(_spoilerEnabled);
    setInlineCode(_inlineCodeEnabled);
    setQuotes(_quotesEnabled);
  },

  logRegionColor: 'darkred',

  name: 'WYSIWYG Messages',
  description: 'Makes messages WYSIWYG-like (like in the message sending box)',

  author: 'Ducko',

  version
};

obj
