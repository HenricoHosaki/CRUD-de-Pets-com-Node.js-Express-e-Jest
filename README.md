🐾 CRUD de Pets com Node.js, Express e Jest

Este projeto é um backend simples para gerenciar uma lista de pets, implementado em Node.js e Express, com testes unitários em Jest.

Permite criar, ler, atualizar e deletar pets de forma simples, com rotas RESTful.

⚡ Tecnologias

Node.js

Express

Jest (testes unitários)

Postman (para testes manuais)

🚀 Como rodar

Clone o repositório:

git clone: https://github.com/HenricoHosaki/CRUD-de-Pets-com-Node.js-Express-e-Jest/

Entre na pasta do projeto:

cd nome-do-projeto

Instale as dependências:

npm install

Inicie o servidor:

node index.js

O servidor estará rodando em http://localhost:1000.

🐶 Rotas

Método | Rota | Body (JSON) | Descrição | Exemplo de resposta

GET /animal/names - Retorna todos os pets { "allPetNames": ["cat","dog"] }

GET /animal/name/:id - Retorna pet pelo índice { "petName": "dog" }

POST /animal/add { "name": "Ant" } Adiciona um novo pet { "petName": "Ant" }

PUT /animal/update/:id { "name": "Horse" } Atualiza o nome de um pet { "updatePet": "Horse", "allPetNames": ["Leo","dog"] }

DELETE /animal/delete/:id - Remove um pet pelo índice { "removedPet": "cat", "allPetNames": ["dog"] }

Nota: O :id é o índice do array do repositório (repoPet).

🧪 Testes

Para rodar os testes unitários:

npm test

Os testes cobrem todas as operações:

getAll

getOne

add

update

delete

💡 Próximos passos

Integrar um banco de dados para persistência real

Melhorar a estrutura com autenticação e validações

Adicionar mais testes avançados

🔗 Testando com Postman Adicionar pet (POST)

Body JSON:

{ "name": "Ant" }

Atualizar pet (PUT)

Body JSON:

{ "name": "Horse" }

Buscar pet específico (GET)

URL: /animal/name/0

Remover pet (DELETE)

URL: /animal/delete/0
