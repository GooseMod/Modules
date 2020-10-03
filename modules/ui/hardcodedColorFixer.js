let version = '1.0.1';

/*const getVariablesObj = (css) => css.split(';').map((x) => x.trim()).filter((x) => x.startsWith('--'))
.reduce((o, val) => {
  const spl = val.split(':');
  return Object.assign(o, {[spl[0].replace('--', '')]: spl[1]})
}, {});*/

const getVariablesArr = (css) => css.split(';').map((x) => x.trim()).filter((x) => x.startsWith('--'))
  .map((x) => x.split(':'));


let obj = {
  onImport: async function () {
    /*let sheet = window.document.styleSheets[0];

    // Friends menu main container - fix hard coded colors
    sheet.insertRule(`body.hardcoded-color-fixes .container-1D34oG {
      background-color: var(--background-primary);
    }`, sheet.cssRules.length);

    // Autocomplete slash and mention menu - fix hard coded colors
    sheet.insertRule(`body.theme-darker .autocomplete-1vrmpx {
      background-color: var(--background-floating);
    }`, sheet.cssRules.length);
    sheet.insertRule(`body.theme-darker .selectorSelected-1_M1WV {
      background-color: var(--background-accent);
    }`, sheet.cssRules.length);

    // Profile popup - fix hard coded colors
    sheet.insertRule(`body.theme-darker .body-3iLsc4, body.theme-darker .footer-1fjuF6 {
      background-color: var(--background-floating);
    }`, sheet.cssRules.length);

    // Server Boost layer / page - fix hard coded colors
    sheet.insertRule(`body.theme-darker .perksModal-fSYqOq {
      background-color: var(--background-primary);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.theme-darker .tierBody-16Chc9 {
      background-color: var(--background-floating);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.theme-darker .perk-2WeBWW {
      background-color: var(--background-floating);
    }`, sheet.cssRules.length);*/

    let sheet = window.document.styleSheets[0];

    let darkThemeVars = getVariablesArr([...sheet.cssRules].find((x) => x.selectorText === '.theme-dark').cssText);
    let lightThemeVars = getVariablesArr([...sheet.cssRules].find((x) => x.selectorText === '.theme-light').cssText);

    let themeVars = darkThemeVars.concat(lightThemeVars).filter((x) => !x[0].includes('scrollbar'));

    for (let rule of sheet.cssRules) {
      for (let v of themeVars) {
        if (rule.cssText.includes(v[1])) {
          console.log(v);
          sheet.insertRule(`body.hardcoded-color-fixes ${rule.selectorText} {
            ${rule.cssText.replace(v[1], `var(${v[0]})`)}
          }`, sheet.cssRules.length);
        }
      }
    }

    document.body.classList.add('hardcoded-color-fixes');
  },

  remove: async function () {
    document.body.classList.remove('hardcoded-color-fixes');
  },

  logRegionColor: 'darkred',

  name: 'Hardcoded Color Fixer',
  description: 'Changes hardcoded colors to variables - improves themes',

  author: 'Ducko',

  version
};

obj