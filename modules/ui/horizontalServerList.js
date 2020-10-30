const version = '2.0.0';

let el;

const css = `:root {  --server-size: var(--HSL-server-icon-size, var(--HSL-size, 35px));  --server-spacing: var(--HSL-server-spacing, var(--HSL-spacing, 10px));  --server-container: calc(var(--server-size) + 20px);}#app-mount .base-3dtUhz {  top: var(--server-container) !important;  position: absolute !important;  left: 0 !important;}#app-mount .sidebar-2K8pFh {  border-radius: 0;}#app-mount [class*=unreadMentionsIndicator] {  width: var(--server-size);  padding: 0;  left: 50%;  transform: translateX(-50%);  height: auto;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ {  transform-origin: top left;  transform: rotate(-90deg);  height: 100vw !important;  width: var(--server-container);  top: var(--server-container);  bottom: unset;  position: absolute !important;  left: 0;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .scrollerWrap-1IAIlv {  width: calc(100% + 30px);}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .scroller-2TZvBN {  padding-top: 0 !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .scroller-2TZvBN>div[style]:not(.listItem-2P_4kh) {  height: auto !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .scroller-2TZvBN>div[style]:not(.listItem-2P_4kh)[style*="height: 0px"] {  padding-top: 1px;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .svg-1X37T1,#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .wrapper-25eVIn,#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .guildsError-b7zR5H,#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .placeholderMask-3K9THS {  width: var(--server-size);  height: var(--server-size);}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [role=group] {  height: auto !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] {  transform: rotate(90deg) translateY(-50%);  height: var(--server-size);  width: 4px;  top: calc(var(--server-size) / -1 + var(--server-size) / 2 - 8px) !important;  margin-left: -2px;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span {  height: 100% !important;  width: 4px !important;  transform: scale(0, 1) !important;  transition: 0.15s ease !important;  margin-left: 0;  border-radius: 0 4px 4px 0;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 0"] {  transform: scale(1, 0.24) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 1"] {  transform: scale(1, 0.24) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 2"] {  transform: scale(1, 0.24) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 3"] {  transform: scale(1, 0.24) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 4"] {  transform: scale(1, 0.24) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 5"] {  transform: scale(1, 0.24) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 6"] {  transform: scale(1, 0.24) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 7"] {  transform: scale(1, 0.24) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 8"] {  transform: scale(1, 0.24) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 9"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 10"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 11"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 12"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 13"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 14"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 15"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 16"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 17"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 18"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 19"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 20"] {  transform: scale(1, 0.7) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 21"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 22"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 23"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 24"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 25"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 26"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 27"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 28"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 29"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 30"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 31"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 32"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 33"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 34"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 35"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 36"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 37"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 38"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 39"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ [class*=pill] span[style*="height: 40"] {  transform: scale(1, 1) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .wrapper-sa6paO {  height: var(--server-size) !important;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .listItem-2P_4kh {  width: var(--server-size);  transform: rotate(90deg);  margin: var(--server-spacing) 10px;  position: unset;}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .guildSeparator-3s64Iy {  transform: rotate(90deg);  width: var(--server-size);}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .wrapper-21YSNc {  width: var(--server-container);}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .expandedFolderBackground-2sPsd- {  width: var(--server-size);  left: 50%;  border-radius: 10px;  transform: translateX(-50%);}#app-mount .wrapper-1Rf91z.guilds-1SWlCJ .folder-21wGz3 {  background: transparent;}#app-mount .listItemTooltip-CDcY8J {  position: absolute;  max-width: unset;  white-space: nowrap;  margin-left: calc(var(--server-size) / -1 - 20px);  top: calc(var(--server-size) - 10px);}#app-mount .listItemTooltip-CDcY8J .tooltipPointer-3ZfirK {  transform: rotate(180deg);  top: -5px;  right: unset;  left: 13px;  z-index: 1;}#app-mount .friendsOnline-2JkivW {  position: absolute;  transform: translate(-50%, 50%);  top: calc(-50% + var(--server-spacing));  left: calc(-50%);  width: calc(var(--server-size) + var(--server-spacing));  display: flex;  justify-content: center;}#app-mount .guilds-1SWlCJ.content-Pph8t6 {  position: absolute !important;  top: calc(var(--server-container) * 2) !important;}#app-mount .guilds-1SWlCJ.content-Pph8t6:not(.closed-j55_T-)+.base-3dtUhz {  top: calc(var(--server-container) * 2) !important;}#app-mount .guilds-1SWlCJ .frame-oXWS21.listItem-2P_4kh {  height: var(--server-size) !important;}#app-mount .guilds-1SWlCJ .frame-oXWS21.listItem-2P_4kh .wrapper-1BJsBx {  height: 100% !important;}#app-mount .guilds-1SWlCJ .frame-oXWS21.listItem-2P_4kh .button-Jt-tIg {  width: 100%;  height: 100% !important;  border-radius: 50%;  padding: 2px;  font-size: 10px;  box-sizing: border-box;  text-align: center;}html.platform-osx #app-mount .typeMacOS-3EmCyP {  width: 100%;}html.platform-osx #app-mount .base-3dtUhz {  top: calc(var(--server-container) + 30px) !important;}html.platform-osx #app-mount #pluginNotice {  top: 32px;  z-index: 100000 !important;}body.foldercontentopened .base-3dtUhz {  transition: 0.2s ease !important;}:root {  --HSL-server-icon-size: 40px;    --HSL-server-spacing: 10px;  }`;

let obj = {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  remove: async function () {
    el.remove();
  },

  name: 'Horizontal Server List',
  description: 'Moves the server list from the left to the top of Discord.',

  author: 'Gibbu',

  version
};

obj