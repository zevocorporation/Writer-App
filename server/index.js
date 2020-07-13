const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()



mongoose
  .connect(
    'mongodb://mongo:27017/db',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



app.listen(5000,()=>console.log('listening on 5000'))