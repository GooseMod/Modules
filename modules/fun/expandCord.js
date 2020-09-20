let version = '1.0.1';

let interval;

function expand() {
  interval = setInterval(function () {
    let messages = document.getElementsByClassName("messageContent-2qWWxC");

    for (let message of messages) {
      message.textContent = [...message.textContent].filter(e => e != " ").join(' ');
    }
  }, 5000);
}

let obj = {
  // Activating module
  onImport: async function () {
    this.logger.debug('expandCord', 'e x p a n d i n g..');
    expand();
  },

  // Removing function
  remove: async function () {
    clearInterval(interval);
  },

  // Random thing I don't rlly want
  logRegionColor: 'blue',

  // Data
  name: '(E x p a n d)Cord',
  description: 'M a k e s  d i s c o r d  w i d e',

  author: 'Fjorge + Ducko',

  version: version
};

obj