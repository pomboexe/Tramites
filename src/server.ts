import { fastify } from 'fastify';
import { createDocument } from './http/create-document';
import { createSetor } from './http/create-setor';
import { createTramite } from './http/create-tramite';
import { getDocuments } from './http/get-document';
import { historicoDocumento } from './http/historico-document';
import { deleteDocument } from './http/delete-document';
import { updateDocument } from './http/update-document';

const app = fastify();

app.register(createDocument)
app.register(createSetor)
app.register(createTramite)
app.register(getDocuments)
app.register(historicoDocumento)
app.register(deleteDocument)
app.register(updateDocument)

app.listen({port:3333}).then(()=>{
    console.log('server runing')
});