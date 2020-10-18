let version = '3.0.0';

let obj = {
  onImport: async function() {
    globalThis.logger.debug('devMode', 'Enabling Developer Mode');

		Object.defineProperty(globalThis.webpackModules.findByProps('isDeveloper'), 'isDeveloper', { configurable: true, writable: true, value: 1 });
	},
	
	remove: async function() {

	},

	logRegionColor: 'darkgreen',
	
	name: 'Dev Mode',
	description: 'Enables developer mode (experiments, etc.)',

	author: 'Ducko',

  version
};

obj