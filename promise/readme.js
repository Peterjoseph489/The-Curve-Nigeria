const fs = require('fs').promises;


fs.readFile('./ample2.txt', 'utf8',)
.then((data)=>{
    console.log(data)
    console.log('status: 200')
})
.catch((e)=>{
    console.log(e);
});