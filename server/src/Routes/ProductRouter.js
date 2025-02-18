import express from "express";
import { getProductByID } from "../Controller/ProductController.js";

const ProductRouter = express.Router();

ProductRouter.get('/:ProductId', getProductByID);  // Less specific dynamic route


export default ProductRouter;