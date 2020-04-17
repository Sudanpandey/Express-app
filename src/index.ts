import "reflect-metadata";
import express, { Request, Response } from "express";

const app = express();

const port = 3000;

const getUser = (_req: Request, res: Response) => {
  res.send("Hello World!");
};

const postUser = (_req: Request, res: Response) => {
  res.send("Got a POST request");
};

app.get("/", getUser);

app.post("/", postUser);

// app.put("/user", function (_req: Request, res: Response) {
//   res.send("Got a PUT request at /user");
// });

// app.delete("/user", function (_req: Request, res: Response) {
//   res.send("Got a DELETE request at /user");
// });

app.listen(port);
