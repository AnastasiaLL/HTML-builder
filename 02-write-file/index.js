const fs = require ('fs');
const path = require ('path');
const process = require('process');

const textWay = path.join(__dirname, 'text.txt');
// let writeableStream = fs.createWriteStream(textWay);


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Привет! напиши мне пару строчек ', (name) => {
    //здесь должна быть проверка на пустой файл. если пустой, то writeFile. иначе - append
    fs.appendFile(textWay, `\nname`, err=>{
        if (err){throw err}
    })
        //здесь должна быть проверка на событие ктрл+с или слово eэкзит
    readline.close()
})
