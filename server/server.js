const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/finalProject',  { useNewUrlParser: true });

const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const dataRoutes = require('./routes/generate-data');
const complimentRoutes = require('./routes/compliments');
const userRoutes = require('./routes/users')

app.use('/data', dataRoutes);
app.use('/compliments', complimentRoutes);
app.use('/users', userRoutes);

const port = 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);