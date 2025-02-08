import express from "express";
import { GetAllCategory, GetAllCategory_SubCategory, Get_Category_SubCategory_Product_Data, Get_Products_by_Subcategory } from "../Controller/CategoryController.js";
const CategoryRouter = express.Router();

// Static routes first
CategoryRouter.get('/getAll', GetAllCategory);
CategoryRouter.get('/category_subcategory', GetAllCategory_SubCategory);

// Dynamic routes after
CategoryRouter.get('/:category/subcategory/:subcategory', Get_Products_by_Subcategory);  // More specific dynamic route
CategoryRouter.get('/:category', Get_Category_SubCategory_Product_Data);  // Less specific dynamic route

export default CategoryRouter;