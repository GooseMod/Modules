const version = '1.0.0';

const getCurrentNickname = () => (getNick.getNick(getGuildId.getGuildId(), user.id) || user.username);

let interval, el, hoverEl, user, getNick, getGuildId;

let hovering = false;

const run = () => {
  if (hovering) return;

  el.textContent = getCurrentNickname();
};

const mouseEnter = () => {
  hovering = true;
  el.textContent = user.username;
};

const mouseLeave = () => {
  hovering = false;
  el.textContent = getCurrentNickname();
};

let obj = {
  onImport: async function () {
    interval = setInterval(run, 300);

    el = document.querySelector('[aria-label="User area"] .title-eS5yk3');

    hoverEl = el.parentElement.parentElement;

    hoverEl.addEventListener('mouseenter', mouseEnter);
    hoverEl.addEventListener('mouseleave', mouseLeave);

    user = this.webpackModules.findByProps('getCurrentUser').getCurrentUser();

    getNick = this.webpackModules.findByProps('getNick');
    getGuildId = this.webpackModules.findByPropsAll('getGuildId')[1];
  },

  onLoadingFinished: async function () {
  },

  remove: async function () {
    clearInterval(interval);

    hoverEl.removeEventListener('mouseenter', mouseEnter);
    hoverEl.removeEventListener('mouseleave', mouseLeave);
  },

  logRegionColor: 'darkred',

  name: 'Nickname Panel',
  description: 'Shows nickname in account panel instead of username (but still username on hover), idea based on Zerebos\' BD plugin "AccountDetailsPlus"',

  author: 'Ducko',

  version
};

obj