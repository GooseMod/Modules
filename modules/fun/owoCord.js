let version = "0.4";

let owointerval;
function owoify() {
	function owocordToOwOSpeak() {
		this.replace(/r/g,"w").replace(/l/g,"w").replace(/R/g,"W").replace(/L/g,"W").replace("(edited)"," [Edited]");
	};
	
	owointerval = setInterval(function () {
		let messages = document.getElementsByClassName("messageContent-2qWWxC");
		for(let message of messages) {
			message.textContent = owocordToOwOSpeak(message.textContent);
		}
	}, 250);
}

let obj = {
	onImport: async function () {
		owoify();
	},
	remove: async function () {
		clearInterval(owointerval);
	},
	logRegionColor: 'green',
	name: 'OwOCord',
	description: 'Makes Discowd mowe owo.',
	author: "ComfyDev",
	version: version
};

obj
