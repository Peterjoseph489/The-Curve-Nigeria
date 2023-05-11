const fs = require('fs');

const emeka = fs.unlink('./ample2.txt', (error, data)=>{
    if(error){
        console.log('File path was deleted')
    }
})