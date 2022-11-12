const Moralis = require('moralis').default;
const fs = require('fs');

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

module.exports = { upload }