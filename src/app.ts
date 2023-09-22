import express from "express";
import router from "./routes";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import { protect } from "./modules/auth";
import { createUser, signIn } from "./handlers/users";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

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
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", protect, router);

app.post("/user", createUser);
app.post("/signin", signIn);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "This is a test" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
