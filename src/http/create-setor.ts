import { FastifyInstance} from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
import * as fs from 'fs';

export async function createSetor(app: FastifyInstance) {
    app.post('/setor', async(request,reply) =>{

        const createSetorBody = z.object({
            SiglaSetor: z.string(),
            DescSetor: z.string(),
        })

        try {
            const { SiglaSetor, DescSetor } = createSetorBody.parse(request.body);

            const setor = await prisma.setor.create({
                data: {
                    SiglaSetor,
                    DescSetor
                }
            });

            reply.status(201).send({ setorid: setor.id });
        } catch (error) {
            console.error('Erro ao criar setor:', error);
            reply.status(500).send({ error: 'Erro ao criar setor' });
        }
    })
}