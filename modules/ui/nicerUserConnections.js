const version = '1.0.3';

let el;

const css = `.connectedAccount-36nQx7 {
	background-color: rbga(0, 0, 0, 0);
	border-width: 0;
}

.connectedAccount-36nQx7 > .connectedAccountIcon-3P3V6F {
	z-index: 1;
}

.connectedAccount-36nQx7 > .connectedAccountIcon-3P3V6F + .connectedAccountNameInner-1phBvE::after {
	--box-shadow: -2px 0 0 0;
	content: "";
	position: absolute;
	border-radius: 1px 3px 3px 1px;
	margin-left: -35px;
	height: 46px;
	width: 44%;
}

.connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE + a.anchor-3Z-8Bb {
	z-index: 1;
}

.connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE > .connectedAccountName-f8AEe2, .connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE > .connectedAccountName-f8AEe2 + span {
	z-index: 1;
}

.connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE > .connectedAccountName-f8AEe2 > .flowerStarContainer-3zDVtj > svg > path, .connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE > .connectedAccountName-f8AEe2 + span > .flowerStarContainer-3zDVtj > svg > path {
	fill: #fff;
	opacity: 0.4;
}

/* Discord Default */
.connectedAccountIcon-3P3V6F[alt*="GitHub"] + .connectedAccountNameInner-1phBvE {
  /* Github */;
}

.connectedAccountIcon-3P3V6F[alt*="GitHub"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #24292E;
	box-shadow: var(--box-shadow) #d9dadb;
}

.connectedAccountIcon-3P3V6F[alt*="Twitch"] + .connectedAccountNameInner-1phBvE {
  /* Twitch */;
}

.connectedAccountIcon-3P3V6F[alt*="Twitch"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #3a2b5f;
	box-shadow: var(--box-shadow) #9059F6;
}

.connectedAccountIcon-3P3V6F[alt*="Steam"] + .connectedAccountNameInner-1phBvE {
  /* Steam */;
}

.connectedAccountIcon-3P3V6F[alt*="Steam"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #171A21;
	box-shadow: var(--box-shadow) #3b587c;
}

.connectedAccountIcon-3P3V6F[alt*="Spotify"] + .connectedAccountNameInner-1phBvE {
  /* Spotify */;
}

.connectedAccountIcon-3P3V6F[alt*="Spotify"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #138139;
	box-shadow: var(--box-shadow) #1ED760;
}

.connectedAccountIcon-3P3V6F[alt*="Twitter"] + .connectedAccountNameInner-1phBvE {
  /* Twitter */;
}

.connectedAccountIcon-3P3V6F[alt*="Twitter"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #0c5886;
	box-shadow: var(--box-shadow) #76C5F5;
}

.connectedAccountIcon-3P3V6F[alt*="Reddit"] + .connectedAccountNameInner-1phBvE {
  /* Reddit */;
}

.connectedAccountIcon-3P3V6F[alt*="Reddit"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #81340e;
	box-shadow: var(--box-shadow) #FF6314;
}

.connectedAccountIcon-3P3V6F[alt*="YouTube"] + .connectedAccountNameInner-1phBvE {
  /* YouTube */;
}

.connectedAccountIcon-3P3V6F[alt*="YouTube"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #6d1616;
	box-shadow: var(--box-shadow) #EE0F0F;
}

.connectedAccountIcon-3P3V6F[alt*="Battle"] + .connectedAccountNameInner-1phBvE {
  /* Blizzard/Battle.net */;
}

.connectedAccountIcon-3P3V6F[alt*="Battle"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #175266;
	box-shadow: var(--box-shadow) #3AB1DA;
}

.connectedAccountIcon-3P3V6F[alt*="Xbox"] + .connectedAccountNameInner-1phBvE {
  /* Xbox Live */;
}

.connectedAccountIcon-3P3V6F[alt*="Xbox"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #1c632a;
	box-shadow: var(--box-shadow) #77BB44;
}

.connectedAccountIcon-3P3V6F[alt*="Facebook"] + .connectedAccountNameInner-1phBvE {
  /* Facebook */;
}

.connectedAccountIcon-3P3V6F[alt*="Facebook"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #14223d;
	box-shadow: var(--box-shadow) #3A5998;
}

.connectedAccountIcon-3P3V6F[alt*="League of Legends"] + .connectedAccountNameInner-1phBvE {
  /* League of Legend (LoL) */;
}

.connectedAccountIcon-3P3V6F[alt*="League of Legends"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #424491;
	box-shadow: var(--box-shadow) #676AE6;
}

.connectedAccountIcon-3P3V6F[alt*="Skype"] + .connectedAccountNameInner-1phBvE {
  /* Skype */;
}

.connectedAccountIcon-3P3V6F[alt*="Skype"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #424491;
	box-shadow: var(--box-shadow) #676AE6;
}

/* Better User Connections Plugin Support */
.connectedAccountIcon-3P3V6F[alt*="GitLab"] + .connectedAccountNameInner-1phBvE {
  /* GitLab */;
}

.connectedAccountIcon-3P3V6F[alt*="GitLab"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #8f2b1b;
	box-shadow: var(--box-shadow) #FCA326;
}

.connectedAccountIcon-3P3V6F[alt*="Minecraft"] + .connectedAccountNameInner-1phBvE {
  /* Minecraft */;
}

.connectedAccountIcon-3P3V6F[alt*="Minecraft"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #2a4911;
	box-shadow: var(--box-shadow) #70B237;
}

/* discord.bio Plugin Support */
.connectedAccountIcon-3P3V6F[alt*="discord.bio"] + .connectedAccountNameInner-1phBvE::after {
	background-color: #3d4870;
	box-shadow: var(--box-shadow) #7289da;
}`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'Nicer User Connections',
  description: 'Adds a bit of a boom-shaka-laka to those user connections.',

  author: 'LuckFire',

  version
};

obj
