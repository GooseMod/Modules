const version = '1.1.0';

let os;
let pathSeparator;

const rpcIndexBase = `module.exports = {
  RPCIPC: require('./RPCIPC'),
  RPCWebSocket: require('./RPCWebSocket'),
};`;

const install = async () => {
  if (!(await this.confirmDialog('Install', 'Install GooseMod Untethered', 'Are you sure you want to install GooseMod Untethered?'))) {
    return;
  }

  const modulePath = await DiscordNative.fileManager.getModulePath();
  const rpcPathAbsolute = [modulePath, 'discord_rpc'].join(pathSeparator);
  const rpcPathHomeRelative = `..${pathSeparator}`.repeat(50) + (os === 'Windows' ? rpcPathAbsolute.replace(/[A-Z]\:\\/, '') : rpcPathAbsolute);
  //const rpcPathHomeRelative = os === 'Windows' ? rpcPathAbsolute.replace(/[A-Za-z]:\\Users\\\w+\\/, '') : rpcPathAbsolute.replace(/\/home\/\w+\//, '');

  console.log(rpcPathAbsolute, rpcPathHomeRelative);

  const injectCode = await this.cspBypasser.text('https://raw.githubusercontent.com/GooseMod/Untethered/master/src/untetheredInject.js');

  const replacementIndexCode = injectCode + '\n\n' + rpcIndexBase;

  await DiscordNative.fileManager.saveWithDialog(replacementIndexCode, 'index.js', rpcPathHomeRelative);
};

const obj = {
  onImport: async function () {
    os = this.webpackModules.findByProps('ua').os.family;
    pathSeparator = os === 'Windows' ? '\\' : '/'
  },

  onLoadingFinished: async function () {
    this.settings.createItem('Untethered Manager', [
      `(v${version})`,

      {
        type: 'button',
        text: 'Install Untethered',
        onclick: install
      },
    ]);
  },

  remove: async function () {
    let settingItem = this.settings.items.find((x) => x[1] === 'Untethered Manager');
    this.settings.items.splice(this.settings.items.indexOf(settingItem), 1);
  },

  logRegionColor: 'darkred',

  name: 'Untethered Manager',
  description: 'Easy installation (and updating) of GooseMod Untethered',

  author: 'Ducko',

  version
};

obj