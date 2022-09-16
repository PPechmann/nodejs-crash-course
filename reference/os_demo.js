const os = require('os');

//Get Platform (Windows, Mac, etc..)
console.log(os.platform());

// get cpu architecture
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

//Get free memory
console.log(os.freemem());

//get total memory 
console.log(os.totalmem());

//get home dir
console.log(os.homedir());

//get amount of time system has been up
console.log(os.uptime());