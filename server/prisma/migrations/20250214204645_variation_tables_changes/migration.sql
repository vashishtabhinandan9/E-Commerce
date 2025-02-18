/*
  Warnings:

  - A unique constraint covering the columns `[Sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Sku` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "Sku" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Variation" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Variation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariationOption" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "VariationId" INTEGER NOT NULL,

    CONSTRAINT "VariationOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariation" (
    "id" SERIAL NOT NULL,
    "ProductId" INTEGER NOT NULL,
    "VariationId" INTEGER NOT NULL,

    CONSTRAINT "ProductVariation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariationOption" (
    "id" SERIAL NOT NULL,
    "ProductVariationId" INTEGER NOT NULL,
    "VariationOptionId" INTEGER NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Sku" TEXT NOT NULL,

    CONSTRAINT "ProductVariationOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "ProductVariationOptionId" INTEGER NOT NULL,
    "Quantity" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Variation_Name_key" ON "Variation"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariationOption_Sku_key" ON "ProductVariationOption"("Sku");

-- CreateIndex
CREATE UNIQUE INDEX "Product_Sku_key" ON "Product"("Sku");

-- AddForeignKey
ALTER TABLE "VariationOption" ADD CONSTRAINT "VariationOption_VariationId_fkey" FOREIGN KEY ("VariationId") REFERENCES "Variation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariation" ADD CONSTRAINT "ProductVariation_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariation" ADD CONSTRAINT "ProductVariation_VariationId_fkey" FOREIGN KEY ("VariationId") REFERENCES "Variation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariationOption" ADD CONSTRAINT "ProductVariationOption_ProductVariationId_fkey" FOREIGN KEY ("ProductVariationId") REFERENCES "ProductVariation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariationOption" ADD CONSTRAINT "ProductVariationOption_VariationOptionId_fkey" FOREIGN KEY ("VariationOptionId") REFERENCES "VariationOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_ProductVariationOptionId_fkey" FOREIGN KEY ("ProductVariationOptionId") REFERENCES "ProductVariationOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
