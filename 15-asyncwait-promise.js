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

const start = async() => {
    try {
        const first = await getText('./content/first.txt')
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}

start()