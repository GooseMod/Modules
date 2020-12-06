let version = "0.3.0";

let owointerval;
function owoify() {
	owointerval = setInterval(function () {
		let messages = document.getElementsByClassName("messageContent-2qWWxC");
		for(let message of messages) {
			message.textContent = message.textContent.replaceAll("r","w").replaceAll("l","w").replaceAll("R","W").replaceAll("L","W").replaceAll("(edited)"," [Edited]");
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
