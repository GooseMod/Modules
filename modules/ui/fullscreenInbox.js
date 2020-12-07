const version = "1.1.0";

let settings = {
  floating: true,
};

let style;
let css;

const evaluateSettings = (value) => {
  if (css) style.removeChild(css);

  if (value) {
    css = document.createTextNode(`@import url("https://raw.githack.com/Freeplayg/Discord-fullscreen-inbox/main/main.css");
    .recentMentionsPopout-3rCiI6 {
      animation: none;
    }
    .iconWrapper-2OrFZ1[aria-label="Inbox"] {
      position: fixed;
      top: 27px;
      left: 12px;
      height: 48px;
      width: 48px;
      margin: 0;
      background-color: var(--background-secondary);
      border-radius: 48px;
      box-shadow: var(--elevation-low);
      transition: border-radius .1s, background-color .1s;
    }
    .iconWrapper-2OrFZ1[aria-label="Inbox"]:hover {
      background-color: #7289da;
      border-radius: 15px;
    }
    .iconWrapper-2OrFZ1[aria-label="Inbox"]:active {
      transform: translateY(1px);
    }
    .iconWrapper-2OrFZ1[aria-label="Inbox"] > svg {
      margin: auto;
      height: 100%;
    }
    .iconWrapper-2OrFZ1[aria-label="Inbox"]:hover > svg {
      color: white !important;
    }
    .guilds-1SWlCJ .scroller-2TZvBN {
      padding-top: 63px !important;
    }
    .unreadMentionsIndicatorTop-gA6RCh {
      top: 48px;
    }`);
    style.appendChild(css);
  } else {
    css = document.createTextNode(`@import url("https://raw.githack.com/Freeplayg/Discord-fullscreen-inbox/main/main.css");
    .recentMentionsPopout-3rCiI6 {
      animation: none;
    }`);
    style.appendChild(css);
  }

  document.head.appendChild(style);
};

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    evaluateSettings(settings.floating);
  },

  onLoadingFinished: async () =>
    goosemodScope.settings.createItem("Fullscreen Inbox", [
      `(v${version})`,
      {
        type: "toggle",
        text: "Floating Inbox Button",
        subtext:
          "Makes the inbox button float on the top left side of the screen with an appearence similair to the DMs button.",
        onToggle: (value) => {
          settings.floating = value;
          evaluateSettings(value);
        },
        isToggled: () => settings.floating,
      },
    ]),

  remove: async () => {
    goosemod.settings.removeItem("Fullscreen Inbox");
    style.remove();
  },

  getSettings: () => [settings],
  loadSettings: ([_settings]) => {
    settings = _settings;
    evaluateSettings(settings.floating);
  },

  name: "Fullscreen Inbox",
  description: "Makes the inbox appear as if it's a channel",
  author: ["Liam The Protogen", "Freeplay"],
  version,
};

obj
