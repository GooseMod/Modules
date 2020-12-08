const version = "1.0.0";

const settings = {
  ping: true,
  modals: true,
  profile: true,
  channelMute: true,
  call: true,
  pins: true,
  update: true,
  userButtons: true,
};

let style;

let stylePing;
let styleModals;
let styleProfile;
let styleChannelMute;
let styleCall;
let stylePins;
let styleUpdate;
let styleUserButtons;

const setPing = (value) => {
  if (!value) {
    stylePing = document.createElement("style");
    stylePing.appendChild(
      document.createTextNode(`.numberBadge-2s8kKX {
        animation: none !important;
      }`)
    );
    document.head.appendChild(stylePing);
  } else {
    try {
      stylePing.remove();
    } catch {}
  }
};
const setModals = (value) => {
  if (!value) {
    styleModals = document.createElement("style");
    styleModals.appendChild(
      document.createTextNode(`.focusLock-Ns3yie {
        animation: none !important;
      }`)
    );
    document.head.appendChild(styleModals);
  } else {
    try {
      styleModals.remove();
    } catch {}
  }
};
const setProfile = (value) => {
  if (!value) {
    styleProfile = document.createElement("style");
    styleProfile.appendChild(
      document.createTextNode(`.headerPlaying-j0WQBV,
      .topSectionPlaying-1J5E4n,
      .headerSpotify-zpWxgT,
      .topSectionSpotify-1lI0-P,
      .topSectionPlaying-1J5E4n,
      .topSectionSpotify-1lI0-P {
        animation: none !important;
      }`)
    );
    document.head.appendChild(styleProfile);
  } else {
    try {
      styleProfile.remove();
    } catch {}
  }
};
const setChannelMute = (value) => {
  if (!value) {
    styleChannelMute = document.createElement("style");
    styleChannelMute.appendChild(
      document.createTextNode(`.iconWrapper-2OrFZ1[role="switch"]:hover {
        animation: none !important;
      }`)
    );
    document.head.appendChild(styleChannelMute);
  } else {
    try {
      styleChannelMute.remove();
    } catch {}
  }
};
const setCall = (value) => {
  if (!value) {
    styleCall = document.createElement("style");
    styleCall.appendChild(
      document.createTextNode(`.iconWrapper-2OrFZ1[aria-label="Start Voice Call"]:hover .icon-22AiRD {
        animation: none !important;
      }`)
    );
    document.head.appendChild(styleCall);
  } else {
    try {
      styleCall.remove();
    } catch {}
  }
};
const setPins = (value) => {
  if (!value) {
    stylePins = document.createElement("style");
    stylePins.appendChild(
      document.createTextNode(`.iconWrapper-2OrFZ1[aria-label="Pinned Messages"]:hover .icon-22AiRD,
      .iconWrapper-2OrFZ1[aria-label="Pinned Messages"].selected-1GqIat .icon-22AiRD {
        animation: none !important;
      }`)
    );
    document.head.appendChild(stylePins);
  } else {
    try {
      stylePins.remove();
    } catch {}
  }
};
const setUpdate = (value) => {
  if (!value) {
    styleUpdate = document.createElement("style");
    styleUpdate.appendChild(
      document.createTextNode(`.iconWrapper-2OrFZ1[aria-label="Update Ready!"]:hover .icon-22AiRD {
        animation: none !important;
      }`)
    );
    document.head.appendChild(styleUpdate);
  } else {
    try {
      styleUpdate.remove();
    } catch {}
  }
};
const setUserButtons = (value) => {
  if (!value) {
    styleUserButtons = document.createElement("style");
    styleUserButtons.appendChild(
      document.createTextNode(`.button-14-BFJ:hover .contents-18-Yxp,
      .container-3baos1 .noWrap-3jynv6,
      .button-14-BFJ,
      .button-14-BFJ:hover {
        animation: none !important;
      }`)
    );
    document.head.appendChild(styleUserButtons);
  } else {
    try {
      styleUserButtons.remove();
    } catch {}
  }
};

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    style.appendChild(
      document.createTextNode(
        `@import url("https://raw.githack.com/Controlfreak707/PowerAnimations/master/theme.css");`
      )
    );
    document.head.appendChild(style);

    setPing(settings.ping);
    setModals(settings.modals);
    setProfile(settings.profile);
    setChannelMute(settings.channelMute);
    setCall(settings.call);
    setPins(settings.pins);
    setUpdate(settings.update);
    setUserButtons(settings.userButtons);
  },

  onLoadingFinished: async () =>
    goosemod.settings.createItem("Power Animations", [
      `(v${version})`,
      {
        type: "header",
        text: "What to Animate",
      },
      {
        type: "toggle",
        text: "Pings Count",
        onToggle: (value) => {
          settings.pings = value;
          setPing(value);
        },
        isToggled: () => settings.pings,
      },
      {
        type: "toggle",
        text: "Modals",
        onToggle: (value) => {
          settings.modals = value;
          setModals(value);
        },
        isToggled: () => settings.modals,
      },
      {
        type: "toggle",
        text: "Profile Modal",
        onToggle: (value) => {
          settings.profile = value;
          setProfile(value);
        },
        isToggled: () => settings.profile,
      },
      {
        type: "toggle",
        text: "Channel Mute Button",
        onToggle: (value) => {
          settings.channelMute = value;
          setChannelMute(value);
        },
        isToggled: () => settings.channelMute,
      },
      {
        type: "toggle",
        text: "Call Button",
        onToggle: (value) => {
          settings.call = value;
          setCall(value);
        },
        isToggled: () => settings.call,
      },
      {
        type: "toggle",
        text: "Pins Button",
        onToggle: (value) => {
          settings.pins = value;
          setPins(value);
        },
        isToggled: () => settings.pins,
      },
      {
        type: "toggle",
        text: "Update Button",
        onToggle: (value) => {
          settings.update = value;
          setUpdate(value);
        },
        isToggled: () => settings.update,
      },
      {
        type: "toggle",
        text: "User Buttons",
        onToggle: (value) => {
          settings.userButtons = value;
          setUserButtons(value);
        },
        isToggled: () => settings.userButtons,
      },
    ]),

  remove: async () => {
    goosemodScope.settings.removeItem("Power Animations");
    style.remove();
  },

  getSettings: () => [settings],
  loadSettings: ([_settings]) => {
    settings = _settings;

    setPing(settings.ping);
    setModals(settings.modals);
    setProfile(settings.profile);
    setChannelMute(settings.channelMute);
    setCall(settings.call);
    setPins(settings.pins);
    setUpdate(settings.update);
    setUserButtons(settings.userButtons);
  },

  name: "Power Animations",
  description: "Adds animations to a bunch of stuff.",
  author: "Liam The Protogen",
  version,
};

obj
