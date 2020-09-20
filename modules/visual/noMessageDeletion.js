let version = '1.0.1';

let interval;

let original;

function run() {
  let el = document.getElementsByClassName('scrollerInner-2YIMLh')[0];

  if (el === null || el.classList.contains('gm-message-deleted-assigned')) return;

  console.log(el);

  original = el.removeChild;

  el.removeChild = (a) => {
    if (!a.classList.contains('message-2qnXI6')) {
      a.remove();
      return;
    }

    let contents = a.querySelector('.messageContent-2qWWxC');

    if (contents.classList.contains('isSending-9nvak6')) {
      a.remove();
      return;
    }

    a.style.backgroundColor = 'rgba(240, 71, 71, 0.1)';

    a.classList.add('gm-message-deleted');
    a.classList.remove('selected-2P5D_Z');
  };

  el.classList.add('gm-message-deleted-assigned');
}

let obj = {
  onImport: async function () {
    interval = setInterval(run, 1000);
  },

  onLoadingFinished: async function () {
  },

  remove: async function () {
    clearInterval(interval);

    for (let e of document.getElementsByClassName('gm-message-deleted')) {
      e.remove();
    }

    for (let e of document.getElementsByClassName('gm-message-deleted-assigned')) {
      e.classList.remove('gm-message-deleted-assigned');
      console.log(e.removeChild);
      e.removeChild = original;
      console.log(original);
    }
  },

  logRegionColor: 'darkred',

  name: 'No Message Deletion',
  description: 'Messages only turn red instead of completely disappearing (only current visible messages)',

  author: 'Ducko',

  version
};

obj