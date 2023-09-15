const express = require("express");
const { default: main, createHttpService } = require("@tinqjs/tinjs-boot");
const { enableProdMode } = require("@angular/core");
const { ngExpressEngine } = require("@nguniversal/express-engine");
const {
  renderModule,
} = require("@angular/platform-server");
const { readFileSync } = require("fs");
const { join } = require("path");
const { AppModule } = require("./src/app/app.module");

const app = express();

enableProdMode();

main(async () => {
  const browserDistPath = join(process.cwd(), "dist", "frontend-angular");

  app.engine(
    "html",
    ngExpressEngine({
      bootstrap: AppModule,
    })
  );

  app.set("view engine", "html");
  app.set("views", browserDistPath);

  app.get(
    "*.*",
    express.static(browserDistPath, {
      maxAge: "1y",
    })
  );

  app.get("*", (req, res) => {
    const indexHtml = readFileSync(
      join(browserDistPath, "index.html")
    ).toString();
    renderModule(AppModule, {
      document: indexHtml,
      url: req.url,
    }).then((html) => {
      res.send(html);
    });
  });

  const listen = createHttpService(app);

  listen(3001, () => {
    console.log(`Service frontend angular ready`);
  });
});
