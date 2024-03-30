-- CreateTable
CREATE TABLE "Documento" (
    "id" SERIAL NOT NULL,
    "NmoDocumento" VARCHAR(10) NOT NULL,
    "Titulo" VARCHAR(40) NOT NULL,
    "DescDocumento" VARCHAR(255) NOT NULL,
    "DataDocumento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "PathArquivoPDF" TEXT NOT NULL,
    "tipoDocumentoId" INTEGER,

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDocumento" (
    "id" SERIAL NOT NULL,
    "DescTipoDocumento" VARCHAR(30) NOT NULL,

    CONSTRAINT "TipoDocumento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setor" (
    "id" SERIAL NOT NULL,
    "SiglaSetor" VARCHAR(10) NOT NULL,
    "DescSetor" VARCHAR(60) NOT NULL,

    CONSTRAINT "Setor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TramitacaoDocumento" (
    "id" SERIAL NOT NULL,
    "documentoId" INTEGER,
    "setorEnvioId" INTEGER NOT NULL,
    "setorRecebeId" INTEGER NOT NULL,

    CONSTRAINT "TramitacaoDocumento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_tipoDocumentoId_fkey" FOREIGN KEY ("tipoDocumentoId") REFERENCES "TipoDocumento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TramitacaoDocumento" ADD CONSTRAINT "TramitacaoDocumento_documentoId_fkey" FOREIGN KEY ("documentoId") REFERENCES "Documento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TramitacaoDocumento" ADD CONSTRAINT "TramitacaoDocumento_setorEnvioId_fkey" FOREIGN KEY ("setorEnvioId") REFERENCES "Setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TramitacaoDocumento" ADD CONSTRAINT "TramitacaoDocumento_setorRecebeId_fkey" FOREIGN KEY ("setorRecebeId") REFERENCES "Setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
