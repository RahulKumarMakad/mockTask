const fs = require('fs');
const path = require('path');
const Product = require('../models/Product');  // Assuming you have a Product model
const connectDB = require('../utils/db');      // Import connectDB function

// Load products from JSON file
const loadProducts = async () => {
  const filePath = path.join(__dirname, 'products.json');  // Path to the JSON file
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);  // Return parsed data as an array of products
};

const seedData = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Clear existing products in the database
    await Product.deleteMany();
    console.log('Existing products cleared!');

    // Load products from product.json
    const products = await loadProducts();

    // Ensure each product has required fields, and set default values if any are missing
    const updatedProducts = products.map((product) => ({
      name: product.name || 'Default Product Name',  // Ensure product has a name
      shortDescription: product.shortDescription || 'No description available',  // Ensure description is available
      bestSellingRank: product.bestSellingRank || 0,  // Set default best selling rank
      thumbnailImage: product.thumbnailImage || 'default_image_url',  // Provide a default image if missing
      salePrice: product.salePrice || 0,  // Ensure sale price is set
      manufacturer: product.manufacturer || 'Unknown Manufacturer',  // Provide default manufacturer name
      url: product.url || 'http://default-url.com',  // Set default URL if missing
      type: product.type || 'Miscellaneous',  // Ensure type/category is set
      image: product.image || 'default_image_url',  // Set default image if missing
      customerReviewCount: product.customerReviewCount || 0,  // Set default review count
      shipping: product.shipping || 'Not Specified',  // Default shipping info
      salePrice_range: product.salePrice_range || '0 - 50',  // Default price range if missing
      objectID: product.objectID || 'default_objectID',  // Ensure each product has an objectID
      categories: product.categories || ['Miscellaneous'],  // Ensure product has categories
    }));

    // Insert the products into the database
    await Product.insertMany(updatedProducts);
    console.log('Products added to the database!');

    process.exit();  // Exit the process after seeding is complete
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

// Run the seed function
seedData();
