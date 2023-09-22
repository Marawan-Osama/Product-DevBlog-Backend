import express from "express";

const router = express.Router();

//Products routes
router
  .route("/products")
  .get((req, res) => {
    console.log("get products");
    res.status(200).json({ msg: "get products" });
  })
  .post(() => {});

router
  .route("/products/:id")
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
