import { Router } from "express";
import Product from "../model/Product.js";

const router = Router();

// Define your routes here
router.get("/", async (req, res) => {

  const products = await Product.find();
  console.log(products);
  

  res.render("index", { products });
});
router.get("/add-product", async (req, res) => {
  res.render("add-product");
});
router.get("/view-product", async (req, res) => {
  res.render("view-product");
});
router.get("/edit-product", async (req, res) => {
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
