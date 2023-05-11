const fs = require('fs').promises;

fs.unlink('./ample2.txt')
.then((err)=>{
    console.log("The file was deleted")
    console.log('status: 200')
})
