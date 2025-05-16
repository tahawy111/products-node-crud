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
router.get("/view-product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.render("view-product", { product });
});
router.get("/edit-product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("edit-product", { product });
});
router.get("/delete-product/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/");
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

router.post("/edit-product/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).send("Product not found");
  }

  const {
    productname,
    productprice,
    productdescription,
    productimageurl,
    badges,
  } = req.body;

  try {
    product.productname = productname;
    product.productprice = productprice;
    product.productdescription = productdescription;
    product.productimageurl = productimageurl;
    product.badges = badges;

    await product.save();

    res.redirect("/view-product/" + id);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).send("Internal Server Error");
  }
});

export default router;
