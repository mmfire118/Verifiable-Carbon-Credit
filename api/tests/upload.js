const upload = require('../upload').upload;

const metadata = require('./metadata.json');

upload(metadata, "PDD").then(result => {
  console.log(result);
});
