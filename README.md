
# API Lista de Contatos 

Projeto feito utilizando NodeJS, Express e Typescript.




## Pré-Requisitos

- NodeJS v22+
- Typescript
- Git
- Insomnia ou Postman
## Instalação

1.  Clone este repositório para seu ambiente local:

            `git clone https://github.com/davi-ldf/API-Lista-de-Contatos-NodeJS.git`

2.  Abra o projeto no VS Code

3.  Abra o cmd dentro do projeto e digite `npm run dev`
## Uso/Exemplos

    1. Abra um programa de teste de API (Insomnia/Postman)
    2. Crie uma coleção
    3. Crie uma URL pro seu Base Environment (BASE) (opcional) Ex: https://localhost:3000
    4. Crie Requisições HTTP com os seguintes Endpoints:

  - Inserir Novo Contato => {{BASE}}/contato
  - Listar Contatos => {{BASE}}/contatos
  - Excluir Contato => {{BASE}}/contato

Observações Importantes:
- O projeto vem com um arquivo `planejamento.txt` na raiz explicando detalhes de como foi feito
- Um exemplo desses detalhes é o uso de Query na hora de deletar contatos, enquanto nos demais endpoints foi utilizado JSON.
