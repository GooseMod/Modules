const version = '1.0.1';

let getUser, getMembers, getGuildId;
let members;
let intervals;

const run = () => {
  for (let el of document.getElementsByClassName('username-1A8OIy')) {
    if (el.classList.contains('username-added')) continue;

    let nick = el.textContent;
    let member = members.find((x) => x.nick === nick);

    if (!member) continue;

    let user = getUser.getUser(member.userId);

    let usernameEl = document.createElement('span');
    usernameEl.style.filter = 'brightness(0.5)';
    usernameEl.style.marginLeft = '5px';
    usernameEl.className = 'author-username';

    usernameEl.textContent = `(${user.username})`;

    el.appendChild(usernameEl);

    el.classList.add('username-added');
  }
};

const updateMembers = () => {
  members = getMembers.getMembers(getGuildId.getGuildId());
};

let obj = {
  onImport: async function () {
    intervals = [];

    getUser = globalThis.webpackModules.findByProps('getUser');
    getMembers = globalThis.webpackModules.findByProps('getNick');
    getGuildId = globalThis.webpackModules.findByPropsAll('getGuildId')[1];

    intervals.push(setInterval(run, 300), setInterval(updateMembers, 5000));

    updateMembers();
  },

  onLoadingFinished: async function () {
  },

  remove: async function () {
    for (let i of intervals) {
      clearInterval(i);
    }

    members = null;

    for (let el of document.getElementsByClassName('author-username')) {
      el.remove();
    }
  },

  logRegionColor: 'darkred',

  name: 'Username In Author',
  description: 'Adds username to message\'s author if they have a nickname',

  author: 'Ducko',

  version
};

obj