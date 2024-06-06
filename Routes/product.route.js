import express from "express";
import {
  deleteProductById,
  getProduct,
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

//Get All Products
router.get("/", getProducts);

//Add A Prodcut
router.post("/", getProduct);

//Get A Product By Id
router.get("/:id", getProductById);

//Update A Product By Id
router.put("/:id", updateProductById);

//Delete A Product By Id
router.delete("/:id", deleteProductById);

export default router;
