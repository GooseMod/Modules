const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const version = '1.1.4';

let css = '';
let styleEl, el, highlightEl, mod;

const updateCSS = (c) => {
  styleEl.innerHTML = '';
  
  styleEl.appendChild(document.createTextNode(c));
};

const updateHighlight = () => {
  highlightEl.innerHTML = el.innerHTML;
  
  mod.highlightBlock(highlightEl);
};

let obj = {
  onImport: async function () {
    styleEl = document.createElement('style');
    
    document.head.appendChild(styleEl);
    
    el = document.createElement('div');
    
    el.style.width = '90%';
    el.style.height = '85vh';
    
    el.style.position = 'absolute';
    
    el.classList.add('hljs', 'css');
    
    el.style.backgroundColor = 'var(--background-secondary)';
    
    el.contentEditable = 'true';
    
    el.style.fontSize = '0.875em';
    el.style.lineHeight = '1.125em';
    el.style.textIndent = '0';
    el.style.whiteSpace = 'pre-wrap';
    
    el.style.fontFamily = 'Consolas,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Monaco,Courier New,Courier,monospace';
    
    highlightEl = el.cloneNode();
    
    highlightEl.style.pointerEvents = 'none';
    highlightEl.style.backgroundColor = 'transparent';
    highlightEl.style.zIndex = '2';
    highlightEl.contentEditable = 'false';
    
    mod = goosemod.webpackModules.findByPropsAll('highlight')[3];
    
    let fn = () => {
      css = el.innerHTML;

      updateHighlight();

      updateCSS(el.textContent);
    };

    el.innerHTML = css;
    
    el.oninput = fn;

    fn();

    el.addEventListener('paste', function (e) { // Don't paste HTML / rich content, only plain text
      e.preventDefault()
      var text = e.clipboardData.getData('text/plain')
      document.execCommand('insertText', false, text)
    });
    
    goosemodScope.settings.createItem('Custom CSS', [
      `(v${version})`,
      
      {
        type: 'custom',
        element: el
      },
      
      {
        type: 'custom',
        element: highlightEl
      }
    ]);
  },
  
  remove: async function () {
    styleEl.remove();
    
    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Custom CSS');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  getSettings: () => [css],
  loadSettings: ([_css]) => {
    css = _css; // Update internal var

    el.innerHTML = css; // Update UI
    updateHighlight();

    updateCSS(el.textContent); // Update actual style
  },
  
  name: 'Custom CSS',
  description: 'Allows entering of your own custom CSS in a code editor with syntax highlighting',
  
  author: 'Ducko',
  
  version
};

obj
