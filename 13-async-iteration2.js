const { readFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
        //or
    if (err) {
        return
    } else {
        console.log(data);
    }
})