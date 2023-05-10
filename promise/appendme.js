const fs = require('fs').promises;


fs.appendFile('./ample2.txt', '\nMonday class self',)
.then(()=>{
    console.log("data")
    console.log('status: 200')
})
.catch((e)=>{
    console.log(e);
});