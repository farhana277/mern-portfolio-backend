const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
