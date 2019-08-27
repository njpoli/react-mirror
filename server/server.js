const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors());

// const dataRoutes = require('./routes/generate-data');
const complimentRoutes = require('./routes/compliments');
const userRoutes = require('./routes/users')

// app.use('/data', dataRoutes);
app.use('/compliments', complimentRoutes);
app.use('/users', userRoutes);

app.use((req, res) => {
  res.status(404)
  .send('404 error! Resource not found.');
});

app.listen(8000);
