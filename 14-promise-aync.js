//not still for two file reads
const { readFile } = require('fs')
    //function
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else
                resolve(data);
        })
    })
}
getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))