const fs = require('fs').promises;


fs.writeFile('./ample2.txt', 'Celebrate Divine',)
.then(()=>{
    console.log("data")
    console.log('status: 200')
})
.catch((e)=>{
    console.log(e);
});