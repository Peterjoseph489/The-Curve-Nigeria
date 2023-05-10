//Assignment: Write a function that 
//1. write to a file
//2. add to a file
//3. delete from a file

const fs = require('fs');

const ebuka = fs.writeFile('./ample1.txt', 'I am the one\n', (error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log("data")};
})

// const emeka = fs.unlink('./ample1.txt', (error, data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)};
// })