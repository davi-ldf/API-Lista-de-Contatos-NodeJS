import express from 'express';
import { readFile, writeFile } from 'fs/promises';
import { createContact, deleteContact, getContacts } from '../services/contact';

const dataSource = './data/list.txt';

const router = express.Router();

//INSERIR CONTATOS
router.post('/contato', async (req, res) => {
    const { name } = req.body;

    if(!name || name.length < 2) {
        res.json({error: 'Nome precisa ter pelo menos 2 caracteres.'});
        return;
    }

    let list = await getContacts();

    await createContact(name);

    res.status(201).json({ contato: name });
    // status 201 == positivo/sucesso
    // devolve o nome do contato adicionado
});

//LER CONTATOS
router.get('/contatos', async (req, res) => {
    let list = await getContacts();


    res.json({ contatos: list });
});

//DELETAR CONTATOS
router.delete('/contato', async (req:any, res:any) => {
    const { name } = req.query;

    if(!name) {
        return res.json({error: 'Precisa mandar um nome para excluir.' });
    }

    let list = await getContacts();


    await deleteContact(name as string);

    res.json({ contato: name });
});

export default router;