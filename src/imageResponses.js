const fs = require('fs');

const dankImage = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getIMG = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankImage);
  response.end();
};

module.exports = {
  getIMG,
};
