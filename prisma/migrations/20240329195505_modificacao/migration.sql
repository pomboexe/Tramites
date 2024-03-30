/*
  Warnings:

  - You are about to drop the column `DataDocumento` on the `Documento` table. All the data in the column will be lost.
  - You are about to drop the column `DescDocumento` on the `Documento` table. All the data in the column will be lost.
  - You are about to drop the column `NmoDocumento` on the `Documento` table. All the data in the column will be lost.
  - You are about to drop the column `PathArquivoPDF` on the `Documento` table. All the data in the column will be lost.
  - You are about to drop the column `Titulo` on the `Documento` table. All the data in the column will be lost.
  - Added the required column `descDocumento` to the `Documento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nmoDocumento` to the `Documento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pathArquivoPDF` to the `Documento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Documento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documento" DROP COLUMN "DataDocumento",
DROP COLUMN "DescDocumento",
DROP COLUMN "NmoDocumento",
DROP COLUMN "PathArquivoPDF",
DROP COLUMN "Titulo",
ADD COLUMN     "dataDocumento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "descDocumento" VARCHAR(255) NOT NULL,
ADD COLUMN     "nmoDocumento" VARCHAR(10) NOT NULL,
ADD COLUMN     "pathArquivoPDF" TEXT NOT NULL,
ADD COLUMN     "titulo" VARCHAR(40) NOT NULL;
