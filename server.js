const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('<h1> express with html </h1>')
})



app.listen(8080);
console.log('server on port 3000')