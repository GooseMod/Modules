const version = '0';

let el;

const css = `/* Menu Items (right click, server menu, message actions, ect.) */
.item-1tOPte.focused-3afm-j, .item-1tOPte:active:not(#user-context-user-volume) {
  color: #fff;
  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);
  font-size: 15px;
  font-weight: bold;
  transition: 0.1s linear;
}
.item-1tOPte.colorPremium-p4p7qO.focused-3afm-j, .item-1tOPte.colorPremium-p4p7qO:active {
  color: #fff;
  background: linear-gradient(315deg, #8980F0 0%, #D577F0 74%);
}
.item-1tOPte.colorDanger-2qLCe1.focused-3afm-j, .item-1tOPte.colorDanger-2qLCe1:active {
  color: #fff;
  background: linear-gradient(315deg, #AA3738 0%, #F04747 74%) !important;
}

.item-1tOPte {
  font-weight: 500;
  transition: 0.1s linear;
}

.wrapper-2aW0bm > .button-1ZiXG9:not(.dangerous-2r8KxV):hover {
  color: #fff;
  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);
}
.wrapper-2aW0bm > .button-1ZiXG9:not(.dangerous-2r8KxV):hover > img, .wrapper-2aW0bm > .button-1ZiXG9:not(.dangerous-2r8KxV):hover svg {
  transform: scale(1.15);
  transition: 0.15s linear;
}
.wrapper-2aW0bm > .button-1ZiXG9.dangerous-2r8KxV:hover {
  color: #fff;
  background: linear-gradient(315deg, #AA3738 0%, #F04747 74%);
}
.wrapper-2aW0bm > .button-1ZiXG9.dangerous-2r8KxV:hover > svg:hover {
  transform: scale(1.15);
  transition: 0.15s linear;
}

.wrapper-2aW0bm > div > .button-1ZiXG9:hover {
  color: #fff;
  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);
}
.wrapper-2aW0bm > div > .button-1ZiXG9:hover > img, .wrapper-2aW0bm > div > .button-1ZiXG9:hover svg {
  transform: scale(1.15);
  transition: 0.15s linear;
}

/* Status Menu */
.status-1fhblQ:active,
.status-1fhblQ + .description-2L932D:active {
  color: #fff;
}

#status-picker > div > .item-1tOPte.focused-3afm-j, #status-picker > div > .item-1tOPte:active {
  transition: 0.075s linear;
}
#status-picker > div > .item-1tOPte.focused-3afm-j > .statusItem-33LqPf > svg > foreignObject > .status-1AY8sU, #status-picker > div > .item-1tOPte:active > .statusItem-33LqPf > svg > foreignObject > .status-1AY8sU {
  background: #fff !important;
}
#status-picker > div > .item-1tOPte.focused-3afm-j#status-picker-online, #status-picker > div > .item-1tOPte:active#status-picker-online {
  background: linear-gradient(315deg, #264D41 0%, #43B581 74%);
}
#status-picker > div > .item-1tOPte.focused-3afm-j#status-picker-idle, #status-picker > div > .item-1tOPte:active#status-picker-idle {
  background: linear-gradient(315deg, #C2831B 0%, #FFB740 74%);
}
#status-picker > div > .item-1tOPte.focused-3afm-j#status-picker-dnd, #status-picker > div > .item-1tOPte:active#status-picker-dnd {
  background: linear-gradient(315deg, #AA3738 0%, #F04747 74%);
}
#status-picker > div > .item-1tOPte.focused-3afm-j#status-picker-invisible, #status-picker > div > .item-1tOPte:active#status-picker-invisible {
  background: linear-gradient(315deg, #373A45 0%, #747F8D 74%);
}

/* Server List (home, join/create, discovery, ect) */
.wrapper-1BJsBx.selected-bZ3Lue > .childWrapper-anI2G9 {
  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);
}
.wrapper-1BJsBx.selected-bZ3Lue > .childWrapper-anI2G9 > .homeIcon-tEMBK1 {
  transform: scale(1.1);
  transition: 0.15s linear;
}

.wrapper-1BJsBx > .childWrapper-anI2G9 > .homeIcon-tEMBK1 {
  transform: scale(1);
  transition: 0.15s linear;
}

.circleIconButton-jET_ig.selected-ugP_am {
  background: linear-gradient(315deg, #264D41 0%, #43B581 74%);
}
.circleIconButton-jET_ig.selected-ugP_am > svg {
  transform: scale(1.25);
}

.circleIconButton-jET_ig > svg {
  transform: scale(1);
}

/* Settings (user, server, ect.) */
.side-8zPYf6 > .item-PXvHYJ:hover {
  transform: scale(1.025);
  transition: 0.15s linear;
}
.side-8zPYf6 > .item-PXvHYJ.selected-3s45Ha {
  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);
}
.side-8zPYf6 > .item-PXvHYJ[data-item-id=DiscordNitro]:not(:hover), .side-8zPYf6 > .item-PXvHYJ[data-item-id=GUILD_PREMIUM]:not(:hover) {
  transform: scale(1);
  transition: 0s linear;
}
.side-8zPYf6 > .item-PXvHYJ[style="color: rgb(255, 255, 255); background-color: rgb(114, 137, 218);"] {
  color: #fff;
  background: linear-gradient(315deg, #8980F0 0%, #D577F0 74%);
}

.side-8zPYf6 > .item-PXvHYJ {
  transform: scale(1);
  transition: 0.15s linear;
}

/* Blurple Buttons */
.colorBrand-3pXr91:not(.lookOutlined-3sRXeN):not(.lookBlank-3eh9lL):not(.lookInverted-2D7oAl):not(.buttonColor-7qQbGO):not(.lookLink-9FtZy-) {
  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);
  color: #fff;
}
.colorBrand-3pXr91:not(.lookOutlined-3sRXeN):not(.lookBlank-3eh9lL):not(.lookInverted-2D7oAl):not(.buttonColor-7qQbGO):not(.lookLink-9FtZy-):not([disabled]):hover {
  transform: scale(1.03);
  transition: 0.15s linear;
}

.colorBrand-3pXr91 {
  transform: scale(1);
  transition: 0.15s linear;
}

/* Grey Buttons */
.colorGrey-2DXtkV:not(.lookGhost-2Fn_0-),
.colorPrimary-3b3xI6:not(.lookLink-9FtZy-):not(.lookOutlined-3sRXeN),
.buttonColor-7qQbGO:not(.buttonActive-3FrkXp) {
  background: linear-gradient(315deg, #373A45 0%, #747F8D 74%);
  color: #fff;
}
.colorGrey-2DXtkV:not(.lookGhost-2Fn_0-):not(.fauxDisabled-2ik0Vw):hover,
.colorPrimary-3b3xI6:not(.lookLink-9FtZy-):not(.lookOutlined-3sRXeN):not(.fauxDisabled-2ik0Vw):hover,
.buttonColor-7qQbGO:not(.buttonActive-3FrkXp):not(.fauxDisabled-2ik0Vw):hover {
  transform: scale(1.03);
  transition: 0.15s linear;
}

.colorGrey-2DXtkV:not(.lookGhost-2Fn_0-),
.colorPrimary-3b3xI6:not(.lookLink-9FtZy-),
.buttonColor-7qQbGO {
  transform: scale(1);
  transition: 0.15s linear;
}

/* Green Buttons */
.colorGreen-29iAKY:not(.lookOutlined-3sRXeN),
.buttonActive-3FrkXp {
  background: linear-gradient(315deg, #264D41 0%, #43B581 74%);
  color: #fff;
}
.colorGreen-29iAKY:not(.lookOutlined-3sRXeN):hover,
.buttonActive-3FrkXp:hover {
  transform: scale(1.03);
  transition: 0.15s linear;
}

.colorGreen-29iAKY,
.buttonActive-3FrkXp {
  transform: scale(1);
  transition: 0.15s linear;
}

/* Yellow Buttons */
.lookFilled-1Gx00P.colorYellow-2JqYwt {
  background: linear-gradient(315deg, #C2831B 0%, #FFB740 74%);
  color: #fff;
}
.lookFilled-1Gx00P.colorYellow-2JqYwt:hover {
  transform: scale(1.03);
  transition: 0.15s linear;
}

.lookFilled-1Gx00P.colorYellow-2JqYwt {
  transform: scale(1);
  transition: 0.15s linear;
}

/* Red Buttons */
.lookFilled-1Gx00P.colorRed-1TFJan {
  background: linear-gradient(315deg, #AA3738 0%, #F04747 74%);
  color: #fff;
}
.lookFilled-1Gx00P.colorRed-1TFJan:hover {
  transform: scale(1.03);
  transition: 0.15s linear;
}

.lookFilled-1Gx00P.colorRed-1TFJan {
  transform: scale(1);
  transition: 0.15s linear;
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

  name: 'Gradient Buttons',
  description: 'Add some spice to your buttons with gradients!',

  author: 'LuckFire',

  version
};

obj