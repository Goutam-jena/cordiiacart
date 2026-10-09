
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(
  __dirname,
  "..",
  "data",
  "products.json"
);

// GET /api/products
const getAllProducts = (req, res) => {
  try {
    const productsData = fs.readFileSync(
      productsFilePath,
      "utf8"
    );

    const products = JSON.parse(productsData);

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

// GET /api/products/:id
const getProductById = (req, res) => {
  try {
    const productsData = fs.readFileSync(
      productsFilePath,
      "utf8"
    );

    const products = JSON.parse(productsData);

    const product = products.find(
      (item) => item.id === Number(req.params.id)
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Error fetching product:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
