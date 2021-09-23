// Node.js Crash Course Tutorial #6 - Express Apps
// https://youtu.be/Lr9WUkeYSA8

const express = require('express');

// express app
const app = express();

// listen for Requests
app.listen(3000);


app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname});
});

// new URL's must be added to this array:
let urls = [
  '/about',
  '/contact'
];

urls.forEach(function(name) {
  app.get(name, function(req, res) {
    res.sendFile(`./public/${name}.html`, { root: __dirname});
  });
});

app.use(express.static(__dirname + '/public'));
