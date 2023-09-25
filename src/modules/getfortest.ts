import express from "express";
const testRouter = express.Router();

testRouter.get("/", (req, res) => {
    res.json({ msg: "hello" });
  });

export default testRouter;
  