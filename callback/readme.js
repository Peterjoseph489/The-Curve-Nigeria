// Callback Function
// import the filesystem 
// const fs = require('fs');

//synchronous way of reading a file
// const myFile = fs.readFileSync("./sample.txt", "utf8");
// console.log(`The content of the file is:\n ${myFile}`);

// //Asynchronous way of reading a file


const fs = require('fs');

const myFile = fs.readFile('./ample1.txt', 'utf8', (error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data);
    }
});

// const add = (a, b)=>{
//     return a + b
//     console.log(a+b)
// }

// add(4, 8);
// console.log("That is the result of our test")