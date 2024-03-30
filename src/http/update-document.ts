import { FastifyInstance } from "fastify"
import { prisma } from "../../lib/prisma"
import { z } from "zod"

export async function updateDocument(app:FastifyInstance) {
    app.put('/documentos/:id', async(request,reply)=>{
        const createDocumentoBody = z.object({
            titulo: z.string(),
            descDocumento: z.string(),
            pathArquivoPDF: z.string()

        })
        const {id} = request.params
        const { titulo, descDocumento, pathArquivoPDF} = createDocumentoBody.parse(request.body)
        try{
            const documento = await prisma.documento.update({
                where:{
                    id: parseInt(id),
                },
                data:{
                    titulo,
                    descDocumento,
                    pathArquivoPDF
                }
            })
            reply.status(202).send({message: 'atualizado', documento})
        }catch (error){
            console.log(error);
            reply.status(500).send({message: 'não atualizado'})
        }
        
    })
}