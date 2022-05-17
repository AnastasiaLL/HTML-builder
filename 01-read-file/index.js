const fs = require ('fs');
const path = require ('path');

const textWay = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(textWay, {encoding:'utf-8'});
stream.on('data', (chunk)=>{
    console.log(chunk)
})