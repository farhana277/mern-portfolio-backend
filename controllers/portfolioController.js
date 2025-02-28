const Portfolio = require("../models/Portfolio");

const createPortfolio = async (req, res) => {
    try {
        const { title, description, img, codelink, livelink } = req.body;

        const newPortfolio = new Portfolio({
            title,
            description,
            img,
            codelink,
            livelink,
            user: req.user.id
        });

        await newPortfolio.save();
        res.status(201).json(newPortfolio);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const getAllPortfolios = async (req, res) => {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
};

const deletePortfolio = async (req, res) => {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: "Portfolio deleted" });
};

const updatePortfolio = async (req, res) => {
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPortfolio);
};

module.exports = { createPortfolio, getAllPortfolios, deletePortfolio, updatePortfolio };
