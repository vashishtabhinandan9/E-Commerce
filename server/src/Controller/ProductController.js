
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
/*
Route     /
Des       Get Product By ID
Params    ProductId
Access    Public
Method    GET  
*/


export const getProductByID = async (req, res) => {
    try {
        const { ProductId } = req.params;

        if (!ProductId) {
            return res.status(400).json({
                success: false,
                message: "ProductId parameter is required"
            });
        }

        // Ensure ProductId is an integer
        const productIdInt = parseInt(ProductId, 10);
        if (isNaN(productIdInt)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ProductId parameter"
            });
        }

        // Execute the raw SQL function
        const result = await prisma.$queryRaw`
            SELECT get_product_details(${productIdInt}) AS product_details;
        `;

        if (result.length === 0 || !result[0].product_details) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        // Parse the JSON result
        const product = result[0].product_details;

        return res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error("Error =>", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

