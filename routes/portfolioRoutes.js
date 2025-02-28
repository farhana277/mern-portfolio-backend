const express = require("express");
const { createPortfolio, getAllPortfolios, deletePortfolio, updatePortfolio } = require("../controllers/portfolioController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createPortfolio);
router.get("/", getAllPortfolios);
router.delete("/:id", authMiddleware, deletePortfolio);
router.put("/:id", authMiddleware, updatePortfolio);

module.exports = router;
