import { FastifyInstance } from "fastify"
import { prisma } from "../../lib/prisma"
import { map, z } from "zod"

export async function historicoDocumento(app:FastifyInstance) {
    app.get('/documentos/historico/:nmoDocumento', async(request,reply) =>{
        const createDocumentoBody = z.object({
            nmoDocumento : z.string(),

        })
        try {
            
            const {nmoDocumento} = createDocumentoBody.parse(request.params)
            const documentos = await prisma.documento.findFirst({
                where: {
                    nmoDocumento:{
                        equals: nmoDocumento
                    }
                }
           
            });
            
            const historico = await prisma.tramitacaoDocumento.findMany({
                where: {
                    documentoId: documentos?.id
                }
            })
            const historicoComDados = await Promise.all(historico.map(async (tramitacao)=>{
                
                const setorEnvioId = await prisma.setor.findUnique({
                    where:{
                        id: tramitacao.setorEnvioId
                    }
                });
                const setorRecebeId = await prisma.setor.findUnique({
                    where:{
                        id: tramitacao.setorRecebeId
                    }
                });

                return {
                    Titulo: documentos ? documentos.titulo: null,
                    setorEnvioSigla: setorEnvioId ? setorEnvioId.SiglaSetor: null,
                    setorRecebeSigla: setorRecebeId ? setorRecebeId.SiglaSetor:null,
                    DataHoraEnvio: tramitacao ? tramitacao.DataHoraEnvio: null
                }
            } ))

            reply.status(200).send(historicoComDados);
        } catch (error) {
            console.error('Erro ao listar documentos:', error);
            reply.status(500).send({ error: 'Erro ao listar documentos' });
        }
    })
}