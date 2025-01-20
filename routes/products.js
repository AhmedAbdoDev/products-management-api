const express = require("express");
const router = express.Router();

const Products = require("../Database/models/products");
router.get("/", async (req, res) => {
  try {
    let data = await Products.find({});
    res.status(200).json(data);
  } catch (e) {
    res.status(204).json({
      message: "error",
    });
  }
});
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let data = await Products(req.body).save();
    res.status(200).json(data);
  } catch (e) {
    res.status(204).json({
      message: "error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let data = await Products.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "not found" });
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({
      message: "error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: "error",
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const data = await Products.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "error",
    });
  }
});
module.exports = router;
