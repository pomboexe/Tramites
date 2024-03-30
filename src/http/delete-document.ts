import { FastifyInstance } from "fastify"
import { prisma } from "../../lib/prisma"
import { z } from "zod"

export async function deleteDocument(app:FastifyInstance) {
    app.delete('/documentos/:id', async(request,reply) =>{


        const { id } = request.params
        try {
           
            const documento = await prisma.documento.findUnique({
                where:{
                    id: parseInt(id)
                }
            });
            await prisma.documento.delete({
                where:{
                    id: parseInt(id)
                }
            })
            
            reply.status(204).send({message:'apagado com sucessor'});
        } catch (error) {
            console.error('Erro ao apagar documento:', error);
            reply.status(500).send({ error: 'Erro ao listar documentos' });
        }
    })
}