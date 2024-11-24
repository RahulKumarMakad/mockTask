const Product = require("../models/Product");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.json(products); // Return products as JSON
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Find product by ID
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product); // Return the product as JSON
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body); // Create a new product from request body
    await newProduct.save();
    res.status(201).json(newProduct); // Return the newly created product
  } catch (error) {
    res.status(500).json({ message: "Failed to add product" });
  }
};

// Update an existing product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated product
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct); // Return the updated product
  } catch (error) {
    res.status(500).json({ message: "Failed to update product" });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" }); // Return success message
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
};
