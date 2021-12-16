import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler"

// @desc Fetch all products
// @route GET /products
// @access public route
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc Fetch all products
// @route GET /products/:id
// @access public route
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})

export { getProducts, getProductById }
