const fs = require('fs').promises;

fs.readFile('./ample1.txt', 'utf8',)
.then((data)=>{
    console.log(data)
    console.log('status: 200')
})
.catch((e)=>{
    console.log(e);
});



 
fs.writeFile('./ample3.txt', 'Celebrate Divine',)
.then(()=>{
    console.log("data")
    console.log('status: 200')
})
.catch((e)=>{
    console.log(e);
});





fs.appendFile('./ample2.txt', '\nMonday class self',)
.then(()=>{
    console.log("data")
    console.log('status: 200')
})
.catch((e)=>{
    console.log(e);
});