
const myModule=require('./modules/ex1.js')
console.log( myModule.getCurrentTime());
console.log(myModule.add(5,2));
const plus=require('./modules/ex1').add;
console.log(plus(10,50));
const fs =require('fs');
const { appendFile } = require('fs/promises');
const data= fs.readFileSync('README.md','utf-8');
fs.appendFileSync ('newFile.txt',myModule.getCurrentTime().toString() + '\n');
console.log(data);
