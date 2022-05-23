const fs = require('fs');
const path = require('path');

const wayToFolderStyles = path.join(__dirname, 'styles');
const wayToBundle = path.join(__dirname, 'project-dist', 'bundle.css');
const writeStream = fs.createWriteStream(wayToBundle);


async function buildStyles (){
    const files = await fs.promises.readdir(wayToFolderStyles, { withFileTypes: true });

    files.filter((file) => file.isFile()).forEach((file) => {
        const fileWay = path.join(wayToFolderStyles, file.name);
        if (path.extname(fileWay) === '.css') {
            const readStream = fs.createReadStream(fileWay, 'utf-8');
            readStream.pipe(writeStream);
        }
    });  
 
}

buildStyles ();