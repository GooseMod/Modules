const version = '1.2.0';

let os;
let pathSeparator;

const rpcIndexBase = `module.exports = {
  RPCIPC: require('./RPCIPC'),
  RPCWebSocket: require('./RPCWebSocket'),
};`;

const install = async () => {
  if (!(await globalThis.confirmDialog('Install', 'Install GooseMod Untethered', 'Are you sure you want to install GooseMod Untethered?'))) {
    return;
  }

  const modulePath = await DiscordNative.fileManager.getModulePath();
  const rpcPathAbsolute = [modulePath, 'discord_rpc'].join(pathSeparator);
  const rpcPathHomeRelative = `..${pathSeparator}`.repeat(50) + (os === 'Windows' ? rpcPathAbsolute.replace(/[A-Z]\:\\/, '') : rpcPathAbsolute);
  // const rpcPathHomeRelative = os === 'Windows' ? rpcPathAbsolute.replace(/[A-Za-z]:\\Users\\\w+\\/, '') : rpcPathAbsolute.replace(/\/home\/\w+\//, '');

  // console.log(rpcPathAbsolute, rpcPathHomeRelative);

  const injectCode = await globalThis.cspBypasser.text('https://goosemod-api.netlify.app/untethered/base.js');

  const replacementIndexCode = injectCode + '\n\n' + rpcIndexBase;

  await DiscordNative.fileManager.saveWithDialog(replacementIndexCode, 'index.js', rpcPathHomeRelative);
};

const obj = {
  onImport: async function () {
    os = globalThis.webpackModules.findByProps('ua').os.family;
    pathSeparator = os === 'Windows' ? '\\' : '/'
  },

  onLoadingFinished: async function () {
    globalThis.settings.createItem('Untethered Manager', [
      `(v${version})`,

      {
        type: 'button',
        text: 'Install Untethered',
        onclick: install
      },
    ]);
  },

  remove: async function () {
    let settingItem = globalThis.settings.items.find((x) => x[1] === 'Untethered Manager');
    globalThis.settings.items.splice(globalThis.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkred',

  name: 'Untethered Manager',
  description: 'Easy installation (and updating) of GooseMod Untethered',

  author: 'Ducko',

  version
};

obj