import express from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/validationMiddleware";
import {
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} from "./handlers/product";
import {
  getUpdates,
  getSingleUpdate,
  updateUpdate,
  deleteUpdate,
  createUpdate,
} from "./handlers/update";

const router = express.Router();

// Products routes

router
  .route("/product")
  .get(getProducts)
  .post(body("name"), handleInputErrors, createProduct);

router
  .route("/product/:id")
  .get(getSingleProduct)
  .put(body("name").isString(), handleInputErrors, updateProduct)
  .delete(deleteProduct);

//Updates routes
router
  .route("/update")
  .get(getUpdates)

  .post(
    body("title").exists(),
    body("body").exists(),
    body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
    body("version").optional(),
    body('productId').exists().isString(),
    handleInputErrors,
    createUpdate
  )
router
  .route("/update/:id")
  .get(getSingleUpdate)

  .put(
    body("title").optional(),
    body("body").optional(),
    body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
    body("version").optional(),
    handleInputErrors,
    updateUpdate
  )

  .delete(deleteUpdate);

//Update Points routes
router
  .route("/updatepoint")
  .get(() => {})
  .post(
    body("name").isString(),
    body("description").isString(),
    handleInputErrors,
    (req, res) => {
      res.status(201).json({ msg: "Update point created" });
    }
  );

router
  .route("/updatepoint/:id")
  .get(() => {})

  .put(
    body("name").optional(),
    body("description").optional(),
    handleInputErrors,
    (req, res) => {
      res.status(200).json({ msg: "Update point updated" });
    }
  )

  .delete(() => {});

export default router;
