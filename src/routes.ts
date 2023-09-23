import express from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

Products routes
router
  .route("/product")
  .get((req, res) => {
    res.status(200).json({ msg: req.hehe });
  })
  .post(body('name'),(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }
    res.status(201).json({ msg: "This is a test" });
  });


router
  .route("/product/:id")
  .get(() => {})
  .put(() => {})
  .delete(() => {});

//Updates routes
router
  .route("/update")
  .get(() => {})
  .post(() => {});

router
  .route("/update/:id")
  .get(() => {})
  .put(() => {})
  .delete(() => {});

//Update Points routes
router
  .route("/updatepoint")
  .get(() => {})
  .post(() => {});

router
  .route("/updatepoint/:id")
  .get(() => {})
  .put(() => {})
  .delete(() => {});

export default router;
