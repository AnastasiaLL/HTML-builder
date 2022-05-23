const fs = require('fs');
const path = require('path');

const SecretFolderWay = path.join(__dirname, 'secret-folder');


fs.readdir(SecretFolderWay, {withFileTypes:true}, (err, el) => {
    if(err) throw err;

    const files = el.filter( el => el.isFile() === true);

    files.forEach( (file) => {
        const FileWay = path.join(SecretFolderWay, file.name);
        const FileInfoObj = path.parse(FileWay);
        fs.stat(FileWay, (err, stats) => {
            if(err) throw err;

            const size = stats.size;
            console.log(
              `${FileInfoObj.name} - ${FileInfoObj.ext.slice(1)} - ${size.toString()}b`
            );
        });
    });
});
