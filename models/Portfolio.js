const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String },
    codelink: { type: String },
    livelink: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Portfolio", PortfolioSchema);
