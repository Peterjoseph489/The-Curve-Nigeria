fs = require('fs')

function reading (path, encode){
    return new Promise (function (resolve, reject) {
        fs.readFile(path, encode, (error, data)=>{
            if(error){
                reject(error)
                console.log(error.message)
            } else {
                resolve (data)
                console.log(data.toString())
            }
        })
    })
}

function appending (path, encode) {
    return new Promise (function (resolve, reject) {
        fs.appendFile(path, '\n I am a Mechanical Engineer', encode, (error, data)=>{
            if (error){
                reject(error)
            } else {
                resolve(data)
                console.log('successful')
            }
        })
    })
}


function deleting (path, encode) {
    return new Promise (function (resolve, reject) {
        fs.unlink(path, (error)=>{
            if (error) {
                reject(error.message)
            } else {
                resolve()
                console.log('Mission successful')
            }
        })
    })
}

async function sortAll (path, encode) {
   try {
    await reading (path, encode)
    await appending (path, encode)
    await reading (path, encode)
   } catch (error) {
    console.log (error.message)
   }
}

sortAll ('./sample.txt', 'utf8')