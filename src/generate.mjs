import { readFileSync, writeFileSync } from 'fs';

import glob from 'glob';

const baseDir = '../../GooseMod/src/modules';

const modules = glob.sync(`${baseDir}/***/*.js`);

let jsons = [];

for (let path of modules) {
  const split = path.split('/');

  const name = split.slice(-1)[0].split('.')[0];
  const category = split.slice(-2)[0];

  const codeURL = `https://gitdab.com/duck/GooseMod/raw/branch/master/src/modules/${category}/${name}.js`;

  const json = {
    name,
    category,
    codeURL
  };

  //const jsonPath = `../api/modules/${name}.json`;

  jsons.push(json);
}

writeFileSync('../api/modules.json', JSON.stringify(jsons));

//let content = readFileSync(`${baseDir}`, 'utf-8');