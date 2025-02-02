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
const GetAllCategory = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
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
        const foundCategory = await prisma.$queryRaw`SELECT * FROM get_Subcategory_by_Category(${category});`;
        // const foundCategory = await prisma.category.findUnique({
        //     where: { Name: category },  // Corrected field name to match your schema
        //     include: { Subcategories: true },  // Corrected relation field name
        // });
        if (!foundCategory) {
            return res.status(404).json({ message: "Category not found" });
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


const Get_Category__subCategory_Product_Data = async (req, res) => {
    const { category } = req.params;

    try {
        // Fetch Subcategories
        const subcategories = await prisma.$queryRaw`
            SELECT * FROM get_Subcategory_by_Category(${category});
        `;

        // Fetch Products
        const products = await prisma.$queryRaw`
            SELECT * FROM get_Products_by_Category(${category});
        `;

        if (!subcategories || subcategories.length === 0) {
            return res.status(404).json({ message: "Category not found or no subcategories available." });
        }

        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found for this category." });
        }

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

export { GetAllCategory, GetSubCategory, GetAllProducts, Get_Category__subCategory_Product_Data };