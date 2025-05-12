import { Router } from "express";

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

export default router;
