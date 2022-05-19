
let path = require('path');
let fs = require('fs');
let textWay = fs.createWriteStream(path.join(__dirname, 'text.txt'));
let { stdout, stdin, exit } = require('process');

stdout.write('напиши что-нибудь: ');
stdin.on('data', (data) => {
    
    if (data.toString().trim() === 'exit'){ 
        bye ()
    }    
    textWay.write(data)
    
})

process.on('SIGINT', bye);


function bye (){
    stdout.write('\nbye!\n')
   exit();
}

