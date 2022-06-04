const {readFileSync,writeFileSync}=require('fs');
console.log("start")
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');


writeFileSync('./content/third.txt','va va mesame to?',{flag:"a"});

console.log("done witht his task")
console.log("statrting the next one");