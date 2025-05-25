const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const mongoose = require("mongoose");
const {
  getProducts,
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", editProduct);




module.exports = router;
