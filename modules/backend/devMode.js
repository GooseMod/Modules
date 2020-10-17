let version = '2.0.0';

let obj = {
  onImport: async function() {
    globalThis.logger.debug('devMode', 'Enabling Developer Mode');

		globalThis.webpackModules.findByProps('isDeveloper').isDeveloper = 1;
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