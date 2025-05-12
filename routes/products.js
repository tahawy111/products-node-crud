import { Router } from "express";
import Product from "../model/Product.js";

const router = Router();

// Define your routes here
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/add-product", (req, res) => {
  res.render("add-product");
});
router.get("/view-product", (req, res) => {
  res.render("view-product");
});
router.get("/edit-product", (req, res) => {
  res.render("edit-product");
});

// POST REQUESTS

router.post("/add-product", async (req, res) => {
  console.log(req.body);

  const {
    productname,
    productprice,
    productdescription,
    productimageurl,
    badges,
  } = req.body;

  try {
    const newProduct = new Product({
      productname,
      productprice,
      productdescription,
      productimageurl,
      badges,
    });

    await newProduct.save();

    res.redirect("/");
  } catch (error) {
    console.error("Error saving product:", error);
    return res.status(500).send("Internal Server Error");
  }
});

export default router;
