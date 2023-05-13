fs = require('fs')
pdf12 = require('pdf-parse')

const abc = fs.readFileSync('./small stuff.pdf')
pdf12(abc).then(function (data) {
        console.log(data.text)
})

