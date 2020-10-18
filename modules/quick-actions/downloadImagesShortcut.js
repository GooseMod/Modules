const version = '1.0.2';

let src;

const downloadURL = async (sourceURL) => {
  // convert URL to data:
  let url = sourceURL.includes('http') ? URL.createObjectURL(await globalThis.cspBypasser.blob(sourceURL, false)) : sourceURL;

  let el = document.createElement('a');

  el.href = url;
  el.download = sourceURL.includes('http') ? sourceURL.split('/').pop() : '';

  el.style.display = 'none';

  document.body.appendChild(el);

  el.click();

  document.body.removeChild(el);
};

const keypressHandler = (e) => {
  if (src && e.key.toLowerCase() === 'd' && e.ctrlKey) {
    downloadURL(src);
  }
};

const hoverHandler = (e) => {
  if (e.target && e.target.src) {
    src = e.target.src.split('?')[0];
  } else {
    src = undefined;
  }
};

let obj = {
  onImport: async function () {
    document.addEventListener('keypress', keypressHandler);
    document.addEventListener('mousemove', hoverHandler);
  },

  remove: async function () {
    document.removeEventListener('keypress', keypressHandler);
    document.removeEventListener('mousemove', hoverHandler);
  },

  logRegionColor: 'darkred',

  name: 'Download Images Shortcut',
  description: 'Allows downloading of images by hovering overing them and pressing Ctrl+D',

  author: 'Ducko',

  version
};

obj