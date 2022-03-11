const express = require('express');
const articles = require('./dummydata/articles');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 5000;

const server = express();

server.get('/api/articles/:id', (req, res) => {
  const article = articles.find((n) => n._id === req.params.id);
  res.send(article);
});

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(
  PORT,
  console.log(`Server is working and listening PORT ${PORT}`)
);
