let version = "0.2.0";

let owointerval;
function owoify() {
	owointerval = setInterval(function () {
		let messages = document.getElementsByClassName("messageContent-2qWWxC");
		for(let message of messages) {
			message.textContent = message.textContent.replace("r","w").replace("l","w").replace("R","W").replace("L","W").replace("(edited)"," [Edited]");
		}
	}, 200);
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
