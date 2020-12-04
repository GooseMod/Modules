let version = '1.3.0';

function setBarId() {
    const lastStableBarAncestor = document.getElementsByClassName("slateTextArea-1Mkdgw")[0];
    const messageBar = Array.from(lastStableBarAncestor.getElementsByTagName("SPAN")).filter(el => el.firstElementChild.tagName == "BR")[0];
    messageBar.setAttribute('id', 'message-bar');
};

function rmBarId() {
    const messageBar = document.getElementById("message-bar");
    messageBar.removeAttribute('id');
};

let obj = {
	// Activating module
	onImport: async function () {
		goosemodScope.logger.debug('Message Bar ID Giver', 'Giving ID...');
        setBarId();
	},

	// Removing function
	remove: async function () {
	    goosemodScope.logger.debug('Message Bar ID Giver', 'Removing message bar ID....');
        rmBarId();
    },
		
	// Data
	name: 'Message Bar ID Giver',
	description: 'Allows other modules to directly edit the message bar by giving it an element id.',

	author: ['Fjorge'],

	version: version
};

obj

