const express = require("express");
const path = require('path');
const { default: main, createHttpService } = require("@tinqjs/tinjs-boot");

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

main(async () => {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/frontend-angular/index.html'));
  });
  
  const listen = createHttpService(app);

  listen(3001, () => {
    console.log(`Service frontend angular ready`);
  });
});
