const version = '1.0.0';

const addAttrToEl = (el) => {
  const userId = el.getElementsByTagName('img')[0].src.split('/')[4];
  el.setAttribute('data-user-id', userId);
};

const handler = async () => {
  const els = document.getElementsByClassName('wrapper-3t9DeA');

  for (let el of els) {
    if (el.getAttribute('data-user-id')) continue;

    addAttrToEl(el);
  }
};

let interval;

let obj = {
  onImport: async function () {
    interval = setInterval(handler, 1000);
  },

  remove: async function () {
    clearInterval(interval);
  },

  name: 'Avatar Data Attribute',
  description: 'Adds data attribute to avatar elements, as some CSS tweaks / modules rely on it',

  author: 'Ducko',

  version
};

obj