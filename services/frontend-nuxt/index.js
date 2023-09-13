const express = require("express");
const { Nuxt, Builder } = require("nuxt");
const { default: main, createHttpService } = require("@tinqjs/tinjs-boot");

const app = express();

// Import and configure your Nuxt.js instance
const config = require("./nuxt.config.js");
const nuxt = new Nuxt(config);

main(async () => {
  if (config.dev) {
    const builder = new Builder(nuxt);
    builder.build();
  }

  app.use(nuxt.render);
  const listen = createHttpService(app);

  listen(3001, () => {
    console.log(`Service frontend nuxtjs ready`);
  });
});
