/*
  Warnings:

  - You are about to drop the column `downvotes` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `upvotes` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "downvotes",
DROP COLUMN "upvotes",
ADD COLUMN     "downVotes" INTEGER,
ADD COLUMN     "upVotes" INTEGER;
