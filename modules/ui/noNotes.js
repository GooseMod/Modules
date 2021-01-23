const version = "1.0.0";

let style;

let obj = {
  onImport: async () => {
    style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(
      document.createTextNode(`.userInfoSectionHeader-CBvMDh, .note-QfFU8y {
         display: none;
      }
      .infoScroller-3EYYns > .userInfoSection-2acyCx:first-of-type {
         margin-top: -45px;
      }
      .topSectionNormal-2-vo2m {
         z-index: 10;
      }`)
    );
  },

  remove: async () => {
    style.remove();
  },

  name: "No Notes",
  description: "Hides the notes on user profile modals. (Does not apply to the user popout.)",
  author: "Liam The Protogen (441384103946878987)",
  version,
};

obj
