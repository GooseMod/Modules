let version = '2.1.0';

let globalTwitchEmotes = {"4Head":"354","ANELE":"3792","ArgieB8":"51838","ArsonNoSexy":"50","AsianGlow":"74","AthenaPMS":"32035","BabyRage":"22639","BatChest":"1905","BCouch":"83536","BCWarrior":"30","BibleThump":"86","BigBrother":"1904","BionicBunion":"24","BlargNaut":"38","bleedPurple":"62835","BloodTrail":"69","BORT":"243","BrainSlug":"881","BrokeBack":"4057","BuddhaBar":"27602","ChefFrank":"90129","cmonBruh":"84608","CoolCat":"58127","CorgiDerp":"49106","CougarHunt":"21","DAESuppy":"973","DansGame":"33","DatSheffy":"170","DBstyle":"73","deExcite":"46249","deIlluminati":"46248","DendiFace":"58135","DogFace":"1903","DOOMGuy":"54089","duDudu":"62834","EagleEye":"20","EleGiggle":"4339","FailFish":"360","FPSMarksman":"42","FrankerZ":"65","FreakinStinkin":"39","FUNgineer":"244","FunRun":"48","FuzzyOtterOO":"168","GingerPower":"32","GrammarKing":"3632","HassaanChop":"20225","HassanChop":"68","HeyGuys":"30259","HotPokket":"357","HumbleLife":"46881","ItsBoshyTime":"169","Jebaited":"90","JKanStyle":"15","JonCarnage":"26","KAPOW":"9803","Kappa":"25","KappaClaus":"74510","KappaPride":"55338","KappaRoss":"70433","KappaWealth":"81997","Keepo":"1902","KevinTurtle":"40","Kippa":"1901","Kreygasm":"41","Mau5":"30134","mcaT":"35063","MikeHogu":"81636","MingLee":"68856","MrDestructoid":"28","MVGame":"29","NinjaTroll":"45","NomNom":"90075","NoNoSpot":"44","NotATK":"34875","NotLikeThis":"58765","OhMyDog":"81103","OMGScoots":"91","OneHand":"66","OpieOP":"356","OptimizePrime":"16","OSfrog":"81248","OSkomodo":"81273","OSsloth":"81249","panicBasket":"22998","PanicVis":"3668","PartyTime":"76171","PazPazowitz":"19","PeoplesChamp":"3412","PermaSmug":"27509","PeteZaroll":"81243","PeteZarollTie":"81244","PicoMause":"27","PipeHype":"4240","PJSalt":"36","PMSTwin":"92","PogChamp":"88","Poooound":"358","PraiseIt":"38586","PRChase":"28328","PunchTrees":"47","PuppeyFace":"58136","RaccAttack":"27679","RalpherZ":"1900","RedCoat":"22","ResidentSleeper":"245","riPepperonis":"62833","RitzMitz":"4338","RuleFive":"361","SeemsGood":"64138","ShadyLulu":"52492","ShazBotstix":"87","ShibeZ":"27903","SmoocherZ":"89945","SMOrc":"52","SMSkull":"51","SoBayed":"1906","SoonerLater":"355","SriHead":"14706","SSSsss":"46","StinkyCheese":"90076","StoneLightning":"17","StrawBeary":"37","SuperVinlin":"31","SwiftRage":"34","TF2John":"1899","TheRinger":"18","TheTarFu":"70","TheThing":"7427","ThunBeast":"1898","TinyFace":"67","TooSpicy":"359","TriHard":"171","TTours":"38436","twitchRaid":"62836","UleetBackup":"49","UncleNox":"3666","UnSane":"71","VaultBoy":"54090","VoHiYo":"81274","Volcania":"166","WholeWheat":"1896","WinWaker":"167","WTRuck":"1897","WutFace":"28087","YouWHY":"4337"};

let globalTwitchEmotesEnabled = true;

let interval;

let betterTTVEnabled = true;
let betterTTVEmotes = [];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const emoteReplace = async (n, el, e, src) => {
  const results = n.textContent.match(new RegExp(`([\\s]|^)${e}([\\s]|$)`));

  if (!results) return;
            
  const pre = n.textContent.substring(0, results.index + results[1].length);
  const post = n.textContent.substring(results.index + results[0].length - results[2].length);

  n.textContent = pre;

  let emojiContainerEl = document.createElement('span');
  emojiContainerEl.classList.add('emojiContainer-3X8SvE');

  emojiContainerEl.setAttribute('role', 'button');
  emojiContainerEl.setAttribute('tabindex', '0');

  let imgEl = document.createElement('img');
  imgEl.src = src;

  imgEl.classList.add('emoji', 'jumboable');

  imgEl.draggable = false;
  imgEl.setAttribute('aria-label', e);

  emojiContainerEl.appendChild(imgEl);

  el.insertBefore(emojiContainerEl, n.nextSibling);

  el.insertBefore(document.createTextNode(post), emojiContainerEl.nextSibling);
}

let canvasImg;

let obj = {
  onImport: async function() {
    betterTTVEmotes = await this.cspBypasser.json('https://api.betterttv.net/3/cached/emotes/global');

    this.cspBypasser.runCode(`document.body.appendChild(document.createElement('canvas'))`);
    canvas = this.cspBypasser.frame.contentDocument.getElementsByTagName('canvas')[0];

    console.log(canvas, canvas.toDataURL());
  },

  onLoadingFinished: async function() {
    interval = setInterval(async () => {
      let els = [...document.getElementsByClassName('messageContent-2qWWxC')];
      for (let el of els) {
        if (globalTwitchEmotesEnabled) for (let e in globalTwitchEmotes) {
          if (!el.textContent.includes(e)) continue;

          for (let n of el.childNodes) {
            if (!n.textContent.includes(e)) continue;

            emoteReplace(n, el, e, `https://static-cdn.jtvnw.net/emoticons/v1/${globalTwitchEmotes[e]}/1.0`); // Discord SCP allows Twitch.tv emotes (because of integration)
          }
        }

        if (betterTTVEnabled) for (let e of betterTTVEmotes) {
          if (!el.textContent.includes(e.code)) continue;

          for (let n of el.childNodes) {
            if (!n.textContent.includes(e.code)) continue;

            emoteReplace(n, el, e.code, await this.cspBypasser.image(`https://cdn.betterttv.net/emote/${e.id}/2x.${e.imageType}`));
          }
        }
      }
    }, 500);

    this.settings.createItem('Twitch Emotes', [
      `(v${version})`,

      {
        type: 'header',
        text: 'Emote Sources'
      },

      {
        type: 'toggle',
        text: 'Global Twitch Emotes',
        subtext: 'Regular global Twitch emotes',
        onToggle: (c) => { globalTwitchEmotesEnabled = c; },
        isToggled: () => globalTwitchEmotesEnabled
      },
      {
        type: 'toggle',
        text: 'BetterTTV Global Emotes',
        subtext: 'BetterTTV Global Emotes',
        onToggle: (c) => { betterTTVEnabled = c; },
        isToggled: () => betterTTVEnabled
      }
    ]);
  },

  remove: async function() {
    clearInterval(interval);

    let settingItem = this.settings.items.find((x) => x[1] === 'Twitch Emotes');
    this.settings.items.splice(this.settings.items.indexOf(settingItem), 1);
  },

  getSettings: () => [globalTwitchEmotesEnabled, betterTTVEnabled],
  loadSettings: ([_globalTwitchEmotesEnabled, _betterTTVEnabled]) => {
    globalTwitchEmotesEnabled = _globalTwitchEmotesEnabled;
    betterTTVEnabled = _betterTTVEnabled;
  },

  logRegionColor: 'green',

  name: 'Twitch Emotes',
  description: 'Converts text into images for Twitch global emotes + BetterTTV emotes',

  author: 'Ducko',

  version
};

obj