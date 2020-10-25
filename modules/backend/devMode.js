let version = '3.0.1';

let obj = {
  onImport: async function() {
    goosemodScope.logger.debug('devMode', 'Enabling Developer Mode');

		Object.defineProperty(goosemodScope.webpackModules.findByProps('isDeveloper'), 'isDeveloper', { configurable: true, writable: true, value: 1 });
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