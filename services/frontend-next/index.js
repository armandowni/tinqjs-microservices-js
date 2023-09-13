const { parse } = require("url");
const next = require("next");
const path = require("path");
const { default: main, createHttpService } = require("@tinqjs/tinjs-boot");
const express = require("express");

const app = express();
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: path.resolve(__dirname) });
const handle = nextApp.getRequestHandler();

app.set("trust proxy", 1);

main(async () => {
  await nextApp.prepare();

  app.use((req, res) => {
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
  });

  const listen = createHttpService(app);

  listen(3001, () => {
    console.log(`Service frontend nextjs ready`);
  });
});

