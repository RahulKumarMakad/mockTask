const seedData = async () => {
    try {
      await connectDB();
  
      // Clear existing products
      await Product.deleteMany();
      console.log("Existing products cleared!");
  
      // Load products from JSON file
      const products = await loadProducts();
  
      // Ensure each product has required fields
      const updatedProducts = products.map(product => ({
        name: product.name || "Default Product Name",
        price: product.price || 0,
        description: product.description || "No description available",
        stock: product.stock || 0,
        image: product.image || "default_image_url",
        category: product.category || "Miscellaneous"
      }));
  
      // Insert new products
      await Product.insertMany(updatedProducts);
      console.log("Products added to the database!");
  
      process.exit();
    } catch (error) {
      console.error(`Error seeding data: ${error.message}`);
      process.exit(1);
    }
  };
  