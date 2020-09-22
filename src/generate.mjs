import { readFileSync, writeFileSync } from 'fs';

import glob from 'glob';

const baseDir = '../modules';

const modules = glob.sync(`${baseDir}/***/*.js`);

let jsons = [];

for (let path of modules) {
  const content = readFileSync(path, 'utf-8');

  const {name, author, description, version} = eval(content);

  const split = path.split('/');

  const filename = split.slice(-1)[0].split('.')[0];
  const category = split.slice(-2)[0];

  const codeURL = `https://raw.githubusercontent.com/GooseMod/Modules/master/modules/${category}/${filename}.js`;

  const json = {
    filename,
    category,
    codeURL,

    name,
    author,
    description,
    version
  };

  //const jsonPath = `../api/modules/${name}.json`;

  jsons.push(json);
}

writeFileSync('../api/modules.json', JSON.stringify(jsons));

//let content = readFileSync(`${baseDir}`, 'utf-8');