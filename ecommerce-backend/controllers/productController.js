const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);  // Return all products
    } catch (error) {
        res.status(500).json({ message: error.message });  // Handle server error
    }
};

// Get product by ID
exports.getProductById = async (req, res) => {
    try {
        // Find product by ID, return 404 if not found
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });  // Improved error handling
        }
        res.status(200).json(product);  // Return product details
    } catch (error) {
        res.status(500).json({ message: error.message });  // Handle internal server errors
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        // Validate that required fields are present in the request body
        const { name, shortDescription, salePrice, manufacturer, thumbnailImage, url, type, image, shipping, objectID, categories } = req.body;
        
        if (!name || !shortDescription || !salePrice || !manufacturer || !thumbnailImage || !url || !type || !image || !shipping || !objectID || !categories) {
            return res.status(400).json({ message: 'All required fields must be provided' });  // Improved validation
        }

        // Create the product using request body
        const product = await Product.create(req.body);
        res.status(201).json(product);  // Respond with the created product
    } catch (error) {
        res.status(400).json({ message: error.message });  // Handle validation errors
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        // Update the product using the provided ID and request body
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });  // Handle product not found
        }
        res.status(200).json(product);  // Return updated product
    } catch (error) {
        res.status(400).json({ message: error.message });  // Handle errors
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });  // Handle product not found
        }
        res.status(204).send();  // Return no content status (successful deletion)
    } catch (error) {
        res.status(400).json({ message: error.message });  // Handle errors
    }
};
