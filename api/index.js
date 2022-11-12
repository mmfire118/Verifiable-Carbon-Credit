const express = require('express');

const upload = require('./upload');

const app = express();

app.use(express.json());

app.post('/upload', function (req, res) {
  const { metadata, type } = req.body;

  res.send({
      "success": true,
      "result": upload(metadata, type),
  });
});

app.get('/', function (req, res) {
  res.send('Hello, World');
})

const server = app.listen(5000, "127.0.0.1", function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(host, port);

  console.log("Listening at http://%s:%s", host, port);
});
