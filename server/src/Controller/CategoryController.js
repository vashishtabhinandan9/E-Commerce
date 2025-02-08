import express from "express"
import bcrypt from 'bcryptjs'
import { SignInSchema, SignUpSchema } from "../ZodSchema/AuthSchema.js";
import { PrismaClient } from "@prisma/client";
import { generateJwtToken } from "../Helper/AuthHelper.js";
const prisma = new PrismaClient();
/*
Route     /
Des       Get all category
Params    none
Access    Public
Method    GET  
*/
const fetchAllCategories = async () => {
    return await prisma.category.findMany();
};
/*
Route     /
Des       Get all category and subcategory 
Params    none
Access    Public
Method    GET  
*/
const GetAllCategory_SubCategory = async (req, res) => {
    try {
        const categories = await fetchAllCategories();
        const subcategories = await prisma.subcategory.findMany();
        return res.status(200).json({
            success: true,
            data: {
                categories,
                subcategories
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const GetAllCategory = async (req, res) => {
    try {
        const categories = await fetchAllCategories();
        return res.status(200).json({
            success: true,
            data: categories
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
/*
Route     /
Des       Get SubCategory based on category
Params    none
Access    Public
Method    GET  
*/

const GetSubCategory = async (req, res) => {
    const { category } = req.params;
    try {
        console.log("abhi9");
        const foundCategory = await prisma.$queryRaw`SELECT * FROM get_Subcategory_by_Category(${category});`;
        // const foundCategory = await prisma.category.findUnique({
        //     where: { Name: category },  // Corrected field name to match your schema
        //     include: { Subcategories: true },  // Corrected relation field name
        // });
        if (!foundCategory || foundCategory.length === 0) {
            return res.status(404).json({ message: "No subcategories found for this category" });
        }
        return res.status(200).json({
            success: true,
            data: foundCategory
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

/*
Route     /
Des       Get All products based on category
Params    none
Access    Public
Method    GET  
*/

const GetAllProducts = async (req, res) => {
    const { category } = req.params;
    try {
        const Products = await prisma.$queryRaw`SELECT * FROM get_Products_by_Category(${category});`;
        // const foundCategory = await prisma.category.findUnique({
        //     where: { Name: category },  // Corrected field name to match your schema
        //     include: { Subcategories: true },  // Corrected relation field name
        // });
        if (!Products) {
            return res.status(404).json({ message: "No products found" });
        }
        return res.status(200).json({
            success: true,
            data: Products
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


/*
Route     /
Des       Get All products and subcategory  for a particular category
Params    none
Access    Public
Method    GET  
*/

const Get_Category_SubCategory_Product_Data = async (req, res) => {
    const { category } = req.params;
    const limit = parseInt(req.query.limit) || 10; // Default limit is 10 if not provided
    const offset = parseInt(req.query.offset) || 0; // Default offset is 0 if not provided

    try {
        console.log("abhi5");
        // Fetch Subcategories (No pagination needed here)
        let subcategories = [];
        if (category === "All") {
            subcategories = await fetchAllCategories();
        } else {
            subcategories = await prisma.$queryRaw`
            SELECT * FROM get_Subcategory_by_Category(${category});
        `;
        }

        // Fetch Products with pagination (limit & offset)
        const products = await prisma.$queryRaw`
            SELECT * FROM get_Products_by_Category(${category}, ${limit}, ${offset});
        `;

        // Check if subcategories exist
        if (category !== "All") {
            if (!subcategories || subcategories.length === 0) {
                return res.status(404).json({ message: "Category not found or no subcategories available." });
            }
        }


        // Check if products exist
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found for this category." });
        }

        // Send success response with paginated products and subcategories
        return res.status(200).json({
            success: true,
            subcategories,
            products
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
/*
Route     /
Des       Get All products  particular subcategory
Params    none
Access    Public
Method    GET  
*/
const Get_Products_by_Subcategory = async (req, res) => {
    try {
        const { subcategory } = req.params;
        const decodedSubcategory = subcategory;
        const limit = parseInt(req.query.limit) || 10;
        const offset = parseInt(req.query.offset) || 0;
        console.log("abhi " + decodedSubcategory);
        // Fetch products from the stored procedure
        const products = await prisma.$queryRaw`
            SELECT * FROM get_Products_by_SubCategory(${decodedSubcategory}, ${limit}, ${offset});
        `;

        if (!products || products.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No products found for this subcategory."
            });
        }

        // Send success response with products
        return res.status(200).json({
            success: true,
            products
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export { GetAllCategory, GetAllCategory_SubCategory, GetSubCategory, GetAllProducts, Get_Category_SubCategory_Product_Data, Get_Products_by_Subcategory };