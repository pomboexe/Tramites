import { FastifyInstance } from "fastify"
import { prisma } from "../../lib/prisma"
import { z } from "zod"

export async function getDocuments(app:FastifyInstance) {
    app.get('/documentos', async(request,reply) =>{
        try {
           
            const documentos = await prisma.documento.findMany();
            
            reply.status(200).send(documentos);
        } catch (error) {
            console.error('Erro ao listar documentos:', error);
            reply.status(500).send({ error: 'Erro ao listar documentos' });
        }
    })
}