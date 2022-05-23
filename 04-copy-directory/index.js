const path = require('path')
const { mkdir, rm } = require('fs/promises');
const { readdir, createReadStream, createWriteStream } = require('fs')
const options = { withFileTypes: true };


function copy (FolderFilesCopy, Folderfiles){

    readdir(Folderfiles, options, (error, files) => {
        if (error) return console.error(error.message);
        
        files.forEach(file => {
            if (file.isFile()) {
                const readStream = createReadStream(path.join(Folderfiles, `${file.name}`))
                const writeStream = createWriteStream(path.join(FolderFilesCopy, `${file.name}`))
                readStream.pipe(writeStream)  
            } else{
                create(FolderFilesCopy, Folderfiles)
            }
        });  
    });      
}

function create(FolderFilesCopy, Folderfiles){
    mkdir(FolderFilesCopy, { recursive: true })
    .then(copy(FolderFilesCopy, Folderfiles))
    .catch(error => console.error(error.message))
}

rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true })
  .then(() => {
    create(path.join(__dirname, 'files-copy'), path.join(__dirname, 'files'))
  })
  .catch(error => console.error(error.message))