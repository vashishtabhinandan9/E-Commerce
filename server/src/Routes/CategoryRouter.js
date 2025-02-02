import express from "express";
import { GetAllCategory, Get_Category__subCategory_Product_Data } from "../Controller/CategoryController.js";
const CategoryRouter = express.Router();
CategoryRouter.get('/getAll', GetAllCategory);
CategoryRouter.get('/:category', Get_Category__subCategory_Product_Data);

export default CategoryRouter;