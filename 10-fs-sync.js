const {readFileSync,writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.text','utf8');

writeFileSync('./content/reuslt-sync.txt0',
 `Here is the result ${first},${second}`,
 {flag:'a'});

console.log('done with this task');
console.log('starting the next one');