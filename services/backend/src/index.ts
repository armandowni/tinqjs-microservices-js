import cors from "cors";
import express, { NextFunction, Request, Response, Router } from "express";
import { urlencoded, json } from "body-parser";
import main, { createHttpService } from "@tinqjs/tinjs-boot";

const app = express();

app.set("trust proxy", 1);
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json({ limit: "10mb" }));

app.use("test", (req: Request, res: Response) =>
  res.send("Yeay you are hit the api. congratsss...")
);

const bootServer = (
  basePath: string,
  host: string = "0.0.0.0",
  port: number = 3002
) =>
  new Promise<void>((resolve) => {
    console.log("API is Starting...");

    const listen = createHttpService(app);

    listen(port, () => {
      console.log(`Service API ready!`);
      resolve();
    });
  });

main(async () => bootServer(""));
