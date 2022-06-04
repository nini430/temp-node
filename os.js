const os=require('os');

const user=os.userInfo();
console.log(user);

console.log(os.uptime())

let services={
    name:os.type(),
    date:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(services)