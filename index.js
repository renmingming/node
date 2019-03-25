const http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(JSON.stringify({userName: 'helloWorld'}))
}).listen(3389)
console.log('NodeJS Server running')