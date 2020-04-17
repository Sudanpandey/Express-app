import "reflect-metadata";
import express, { Request, Response } from "express";
import { Student } from "./entity/Student";

const app = express();

const port = 3000;

const getUser = (_req: Request, res: Response) => {
  res.send("Hello World!");
};

const postUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const model = Object.assign(new Student(), body);
    const student = await model.save();
    res.send({
      id: student.id,
      message: "Student added successfully!",
    });
  } catch (error) {
    console.log(error);
  }
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
