import { FastifyInstance} from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function createTramite(app: FastifyInstance) {
    app.post('/tramite', async(request,reply) =>{

        const createTramitacaoDocumentoBody = z.object({
            documentoId: z.number(),
            setorEnvioId: z.number(),
            setorRecebeId: z.number()

        })

        

        try {
            const { documentoId, setorEnvioId, setorRecebeId} = createTramitacaoDocumentoBody.parse(request.body);

            const tramite = await prisma.tramitacaoDocumento.create({
                data: {
                   documentoId,
                    setorEnvioId,
                    setorRecebeId
                }
            });

            reply.status(201).send({ tramiteid: tramite.id });
        } catch (error) {
            console.error('Erro ao criar documento:', error);
            reply.status(500).send({ error: 'Erro ao criar documento' });
        }
    })
}