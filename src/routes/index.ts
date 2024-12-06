import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const dataSource = './data/list.txt';

const router = express.Router();

//INSERIR CONTATOS
router.post('/contato', async (req, res) => {
    const { name } = req.body;

    if(!name || name.length < 2) {
        res.json({error: 'Nome precisa ter pelo menos 2 caracteres.'});
        return;
    }

    //Processamento dos dados
    let list: string[] = [];
    try { //Se existir um arquivo, leia-o
        const data = await readFile(dataSource, { encoding: 'utf8' });
        // lê a lista e joga a string dentro de data
        list = data.split('\n');
        // pega a string de data e fatia em um array a cada '\n'
        // joga tal array para dentro de list
    } catch (err) {}

    list.push(name); //Adiciona o novo contato no array
    await writeFile(dataSource, list.join('\n')); 
    //Escreve ele na lista
    //Com o join, o array vira texto antes de ser usado de conteúdo pelo 'writeFile'

    res.status(201).json({ contato: name });
    // status 201 == positivo/sucesso
    // devolve o nome do contato adicionado
});

//LER CONTATOS
router.get('/contatos', async(req, res) => {
    let list: string[] = [];
    try { //Se existir um arquivo, leia-o
        const data = await readFile(dataSource, { encoding: 'utf8' });
        list = data.split('\n');
    } catch (err) {}

    res.json({ contatos: list });
});

export default router;