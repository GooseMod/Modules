let version = '1.0.0';

let el;

let obj = {
  onImport: async function () {
    goosemodScope.patcher.contextMenu.add('message',
      {
        label: 'Hide Message',
        action: (_originalArgs, extraInfo) => {
          document.getElementById(`chat-messages-${extraInfo.message.id}`).remove();
        }
      }
    );
  },

  remove: async function () {
    goosemodScope.patcher.contextMenu.remove('Hide Message');
  },

  name: 'Hide Message',
  description: 'Adds a hide message option to all message\'s context menus which temporarily hides it',

  author: 'Ducko',

  version
};

obj
