import { readFile, writeFile } from "fs/promises";

const dataSource = './data/list.txt';


export const getContacts = async () => {
   //Processamento dos dados
   let list: string[] = [];
   try { //Se existir um arquivo, leia-o
       const data = await readFile(dataSource, { encoding: 'utf8' });
       // lê a lista e joga a string dentro de data
       list = data.split('\n');
       // pega a string de data e fatia em um array a cada '\n'
       // joga tal array para dentro de list
   } catch (err) {}

    return list;
}

export const createContact = async (name: string) => {
    let list = await getContacts();

    list.push(name); //Adiciona o novo contato no array
    await writeFile(dataSource, list.join('\n')); 
    //Escreve ele na lista
    //Com o join, o array vira texto antes de ser usado de conteúdo pelo 'writeFile'
}

export const deleteContact = async (name:string) => {
    let list = await getContacts();


    list = list.filter(item => item.toLowerCase() !== name.toLowerCase());
    //Retorna true se o nome não bater (mantém)

    await writeFile(dataSource, list.join('\n'));
}