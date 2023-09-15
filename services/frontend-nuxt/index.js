const { parse } = require("url");
const express = require("express");
const { Nuxt, Builder } = require("nuxt");
const { default: main, createHttpService } = require("@tinqjs/tinjs-boot");

const app = express();

// Import and configure your Nuxt.js instance
const config = require("./nuxt.config.js");
// console.log(config);

main(async () => {
  const nuxt = new Nuxt(config);

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use("/nuxt", (req, res) => {
    const parsedUrl = parse(req.url, true);
    nuxt.render(req, res, parsedUrl);
  });

  const listen = createHttpService(app);

  listen(3001, () => {
    console.log(`Service frontend nuxtjs ready`);
  });
});
