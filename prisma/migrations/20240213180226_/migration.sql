/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Post_address_key" ON "Post"("address");
