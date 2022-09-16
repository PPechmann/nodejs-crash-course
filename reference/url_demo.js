const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//get serialized url (straight up url)
console.log(myUrl.href);

//get host /root domain
console.log(myUrl.host);

//get host name / does not get the port, host does
console.log(myUrl.hostname);

//get path name
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//ad params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));