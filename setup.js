const fs = require('fs');
const package = require('./package.json');

let dirName = process.env.PWD.split('/');
dirName = dirName[dirName.length - 1];

package.name = dirName.toLowerCase();

fs.writeFileSync( './package.json', JSON.stringify(package, null , 2));
console.log(`Set "name" in package.json to ${dirName}`);
