const os = require('os')


//the userinfo
const user = os.userInfo()
console.log(user);

//the system uptime
console.log(`The system uptime is: ${os.uptime()} seconds`)

//Full sys info
const currentOs = {
    name: os.type(),
    release: os.release(),
    version: os.version(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    cpu: os.cpus(),

}

console.log(currentOs);