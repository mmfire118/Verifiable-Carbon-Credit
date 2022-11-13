const express = require('express');
const cors = require('cors')
const Moralis = require('moralis').default;
const fs = require('fs');

const port = process.env.PORT || 3001;

async function upload(metadata, type) {
  await Moralis.start({
    apiKey: "4YHNRJBE7DR0ZHI6AsXkkiKAnOZ92rOT1gKFi703CAUdYW8dxLymsNVw1ccJLOPN",
  });

  const uploadArray = [
    {
      path: "data.json",
      content: {
        "type": type,
        "metadata": metadata,
      },
    },
  ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({
    abi: uploadArray,
  });

  return response.result;
}

const app = express();

app.use(cors());

app.use(express.json());

app.post('/upload', function (req, res) {
  const { metadata, type } = req.body;
  
  upload(metadata, type).then((result) => {
    res.send({
        "success": true,
        "result": result,
    });
  })

  
});

app.get('/', function (req, res) {
  res.send('Hello, World');
})

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(host, port);

  console.log("Listening at https://%s:%s", host, port);
});
