const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('<h1> express with html </h1>')
})



server.listen(3000);
console.log('server on port 3000')