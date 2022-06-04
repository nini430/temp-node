const path=require('path');

console.log(path.sep);


const fileName=path.join('/content//',"subfolder","text.txt");

console.log(path.basename(fileName))