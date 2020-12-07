let version = "0.3.1";

let owointerval;
function owoify() {
	String.prototype.owocordToOwOSpeak = function() {
		this.split("r").join("w").split("R").join("W").split("l").join("w").split("L").split("W").replace("(edited)"," [Edited]");
	};
	
	owointerval = setInterval(function () {
		let messages = document.getElementsByClassName("messageContent-2qWWxC");
		for(let message of messages) {
			message.textContent = message.textContent.owocordToOwOSpeak();
		}
	}, 250);
}

let obj = {
	onImport: async function () {
		owoify();
	},
	remove: async function () {
		clearInterval(owointerval);
		String.prototype.owocordToOwOSpeak = undefined;
	},
	logRegionColor: 'green',
	name: 'OwOCord',
	description: 'Makes Discowd mowe owo.',
	author: "ComfyDev",
	version: version
};

obj
