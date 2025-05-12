import { Router } from "express";
import productsRouter from "./products.js";
const router = Router();

router.use("/", productsRouter);

export default router;
