import express from "express";
import router from "./routes";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import { protect } from "./modules/auth";
import { createUser, signIn } from "./handlers/users";
import testRouter from "./modules/getfortest";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

declare global {
  namespace Express {
    interface Request {
      hehe: string;
    }
  }
}

app.use((req, res, next) => {
  req.hehe = "hehe";
  next();
});

app.use('/', testRouter)
app.use("/api/v1", protect, router);
app.post("/user", createUser);
app.post("/signin", signIn);

export default app

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
