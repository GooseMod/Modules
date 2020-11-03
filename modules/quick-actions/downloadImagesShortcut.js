const version = '1.1.0';

let src;

const downloadURL = async (url) => {
  let el = document.createElement('a');

  el.href = url;
  el.download = url.includes('http') ? url.split('/').pop() : '';

  el.style.display = 'none';

  document.body.appendChild(el);

  el.click();

  document.body.removeChild(el);
};

const keypressHandler = (e) => {
  if (src && e.code === 'KeyD' && e.ctrlKey) {
    downloadURL(src);

    e.preventDefault();
    return false;
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

  name: 'Download Images Shortcut',
  description: 'Allows downloading of images by hovering overing them and pressing Ctrl+D',

  author: 'Ducko',

  version
};

obj