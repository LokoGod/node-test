const { log } = require('console');
const path = require('path');

console.log(path.sep);

const filepath = path.join('/content', 'subfoler', 'test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

let absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);