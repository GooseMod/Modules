
let version = '1.0.0';
let unpatch;

let obj = {
  onImport: async function() {
    unpatch = goosemodScope.patcher.patch(goosemodScope.webpackModules.findByProps('createPendingReply'), 'createPendingReply', (data) => { data[0].shouldMention = false}, true);
  },

  remove: async function() {
    unpatch()
  },

  name: `Disable ping reply`,
  description: `Automatically turns off pinging whoever you're replying to`,

  author: 'Lith',

  version
};

obj
