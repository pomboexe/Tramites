-- AlterTable
ALTER TABLE "TramitacaoDocumento" ADD COLUMN     "DataHoraEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "DataHoraRecebido" TIMESTAMP(3);
