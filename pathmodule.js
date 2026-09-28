const path = require('path')

console.log(path.sep)

const filepath = path.join('/content','subfolder','text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)


//other//

const {readFile,writeFile, read} = require('fs');

console.log('start')

readFile('./content/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(Err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',`heres your result ${first},${second}`
            ,(err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('success')
                }
        )
    })
})
console.log('starting next task')