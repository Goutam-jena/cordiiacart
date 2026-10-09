
// const express = require("express");
// const cors = require("cors");

// const productRoutes = require("./routes/productRoutes");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Home route: check whether the API is running
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Welcome to CordiiaCart API",
//   });
// });

// // Product routes
// app.use("/api/products", productRoutes);

// // Handle unknown routes
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//   });
// });

// // Start server
// app.listen(PORT, "0.0.0.0", () => {
//   console.log("----------------------------------");
//   console.log("CordiiaCart Backend Started");
//   console.log(`Server: http://localhost:${PORT}`);
//   console.log(`Products: http://localhost:${PORT}/api/products`);
//   console.log("----------------------------------");
// });







require("dotenv").config();

const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route: check whether the API is running
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to CordiiaCart API",
  });
});

// Product routes
app.use("/api/products", productRoutes);

// Authentication routes
app.use("/api/auth", authRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log("----------------------------------");
  console.log("CordiiaCart Backend Started");
  console.log(`Server: http://localhost:${PORT}`);
  console.log(`Products: http://localhost:${PORT}/api/products`);
  console.log(`Register: http://localhost:${PORT}/api/auth/register`);
  console.log(`Login: http://localhost:${PORT}/api/auth/login`);
  console.log("----------------------------------");
});
