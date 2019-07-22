const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const connect = require('./model');
require('dotenv').config()
const app = express();
connect();

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

app.set('jwt-secret', process.env.SECRET);

app.get('/', (req,res) => {
  res.send('HELLO JWT');
})

app.use('/api', require('./routes/api'))

app.listen(PORT, () => {
  console.log(`express is running on ${PORT}`)
})