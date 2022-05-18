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
    if (name === 'exit'){ 
        // process.stdout.write('пока!')
        readline.close()
    } else {

        fs.appendFile(textWay, `${name}\n`, err=>{
            if (err){throw err}
            readline.close()

        })
    }

    
})

process.on('exit', ()=>{
    process.stdout.write('\nbye!\n')
})






// output.write('введите 1е')
// readline.on('line', (value) => {
//     if (value === 'exit'){
//         readline.close();
//     }else {
//         output.write('2e: ')
//         let str = value.toString();
//         textWay.write(`${str}\n`)
//     }
// })

// process.on('exit', ()=>{
//   console.log('\nbye!\n')
//   output.write('clouse')
// })