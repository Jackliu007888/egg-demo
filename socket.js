const server = require('http').createServer()
const io = require('socket.io')(server)
io.on('connection', client => {
  console.log('connected')
  client.on('event', data => { 
    console.log(data)
  })
  client.on('message', data => { 
    console.log('message:', data)
  })
  client.on('disconnect', () => { /* … */ })
})
server.listen(3000)
console.log('server.listen on port 3000')