const http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(JSON.stringify({userName: 'helloWorldRenmingming'}))
}).listen(8080)
console.log('NodeJS Server running')