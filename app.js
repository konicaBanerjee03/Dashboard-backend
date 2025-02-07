const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const clickRoutes = require("./routes/clickRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cors = require("cors");
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});
app.use("/api/auth", authRoutes);
app.use("/api/clicks", clickRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/orders", orderRoutes);

app.use((err, req, res, next) => {
  console.log("Error in ", req.url, err.message);
  res.status(500).json({ message: err.message });
});

module.exports = app;
