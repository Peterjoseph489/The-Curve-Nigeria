// Callback Function
// import the filesystem 
// const fs = require('fs');

//synchronous way of reading a file
// const myFile = fs.readFileSync("./sample.txt", "utf8");
// console.log(`The content of the file is:\n ${myFile}`);

// //Asynchronous way of reading a file


// const myFile = fs.readFile('./sample.txt', 'utf8', (error, data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data);
//     }
// });

// const add = (a, b)=>{
//     return a + b
//     console.log(a+b)
// }

// add(4, 8);
// console.log("That is the result of our test")


//Assignment: Write a function that 
//1. write to a file
//2. add to a file
//3. delete from a file

// const ebuka = fs.writeFile('./ample1.txt', 'I am the one\n', (error, data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("data")};
// })

// const obi = fs.appendFile('./ample1.txt', 'We are balling in class', (error, data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("data")};
// })

// const emeka = fs.unlink('./ample1.txt', (error, data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)};
// })


const fs = require('fs');
// const pdf = require('pdf-parse');

fs.readFileSync('./P.pdf', 'ASCII', (error, data)=>{
        if(error){
            console.log(error)
        }else{
            const text = data.text;
            console.log(text);
        }
    });
// const text = data.text;
// console.log(text); 
