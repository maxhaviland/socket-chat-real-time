const app = require('express')();
const http = require ('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 8080 || 8081;

app.get('/', (req, res) => res.send(`
  <h1>Welcome!</h1>
  <h5>Use on your client and be happy!</h5>
  <style>body{text-align: center; color: #333333}</style>
`));

io.on('connection', socket => {
  socket.on('message', data => {
    console.log(data)
    io.emit('message', data)
  })
});

http.listen(PORT, () => console.log(`server is running on port: ${PORT}`));