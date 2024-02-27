const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// how to get the Serialized URL
console.log(myUrl.href);

// how to get the Host (root domain)
console.log(myUrl.host);

// Host name
console.log(myUrl.hostname); // does not get the port number

// pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params objects
console.log(myUrl.searchParams);
