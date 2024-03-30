
import { FastifyInstance} from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
import * as fs from 'fs';

export async function createDocument(app: FastifyInstance) {
    app.post('/documento', async(request,reply) =>{

        const createDocumentoBody = z.object({
            titulo: z.string(),
            descDocumento: z.string(),
            nmoDocumento : z.string(),
            pathArquivoPDF: z.string()

        })

        

        try {
            const { titulo, descDocumento, nmoDocumento, pathArquivoPDF } = createDocumentoBody.parse(request.body);

            const documento = await prisma.documento.create({
                data: {
                    titulo,
                    descDocumento,
                    nmoDocumento,
                    pathArquivoPDF
                }
            });

            reply.status(201).send({ documentoid: documento.id });
        } catch (error) {
            console.error('Erro ao criar documento:', error);
            reply.status(500).send({ error: 'Erro ao criar documento' });
        }
    })
}