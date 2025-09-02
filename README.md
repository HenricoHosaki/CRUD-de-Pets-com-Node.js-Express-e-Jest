# 🐾 CRUD de Pets com Node.js, Express, MySQL e Jest

Este projeto é um backend simples para gerenciar uma lista de pets, implementado em Node.js e Express, usando MySQL via Sequelize, com testes unitários em Jest.

Permite criar, ler, atualizar e deletar pets de forma simples, com rotas RESTful e persistência em banco de dados.


## ⚡ Tecnologias

Node.js

Express

MySQL (XAMPP)

Sequelize (ORM)

Jest (testes unitários)

Postman (para testes manuais)


## 💻 Pré-requisitos

Node.js instalado

XAMPP instalado e rodando (MySQL)

NPM (gerenciador de pacotes do Node.js)


## 🚀 Como rodar
1. Clone o repositório
   
git clone https://github.com/HenricoHosaki/CRUD-de-Pets-com-Node.js-Express-e-Jest/

cd CRUD-de-Pets-com-Node.js-Express-e-Jest

|--------------------------------------------------------------------------------------------------------------------------|

2. Configure o MySQL

Abra o XAMPP e inicie o MySQL.

Abra o phpMyAdmin e crie um banco de dados chamado, por exemplo, petsdb.

**Ajuste o arquivo de configuração do Sequelize (database.js) com os dados do seu MySQL:**

```const { Sequelize } = require('sequelize');

const db = new Sequelize('petsdb', 'root', '', {

  host: 'localhost',
  
  dialect: 'mysql',
});

module.exports = { db };
```

Substitua 'root' e '' pelo usuário e senha do seu MySQL, se necessário.

|--------------------------------------------------------------------------------------------------------------------------|

3. Instale as dependências
   
npm install express sequelize mysql2

npm install jest --save-dev

|--------------------------------------------------------------------------------------------------------------------------|

4. Inicie o servidor
   
node index.js

O servidor estará rodando em http://localhost:1000.

|--------------------------------------------------------------------------------------------------------------------------|

### 🐶 Rotas
Método	Rota	Body (JSON)	Descrição	Exemplo de resposta

GET /pets/	-	Retorna todos os pets	json 
```
[ { "id": 1, "name": "Ant"
, "breed": "Chow Chow",
 "color": "Brown",
 "tutor": "Lucas",
 "birthDate": "2021-05-12" },
{ "id": 2,
 "name": "Horse",
 "breed": "Arabian",
 "color": "White",
 "tutor": "Ana",
 "birthDate": "2019-02-10" } ]
```
GET /pets/:id	-	Retorna um pet pelo ID	json 
```
{ "id": 1,
"name": "Lupo",
"breed": "Chow Chow",
"color": "Brown",
"tutor": "Lucas",
"birthDate": "2021-05-12" }
```

POST /pets/ Adicione um pet json
```
{ "name":"Sheila",
"breed":"Dalmata",
"color":"White",
"tutor":"Pedro",
"birthDate":"2021-10-25" }
```

PUT /pets/:id	Atualiza os dados de um pet json
```
{ "name":"Horse",
 "breed":"Arabian",
 "color":"White",
 "tutor":"Ana",
 "birthDate":"2019-02-10" }
```

DELETE /pets/:id	-	Remove um pet pelo ID json 

```{ "message": "Pet removido com sucesso" }```


## 🧪 Testes

Para rodar os testes unitários:

npm test


**Os testes cobrem todas as operações:**

findAll

findById

create

update

delete


## 💡 Próximos passos

Criar um front-end básico


## 🔗 Testando com Postman

Adicionar pet (POST)
Body JSON:
```
{
  "name": "Ant",
  "breed": "Chow Chow",
  "color": "Brown",
  "tutor": "Lucas",
  "birthDate": "2021-05-12"
}
```

Atualizar pet (PUT)
Body JSON:
```
{
  "name": "Horse",
  "breed": "Arabian",
  "color": "White",
  "tutor": "Ana",
  "birthDate": "2019-02-10"
}
```

Buscar pet específico (GET)
URL: /animal/name/1

Remover pet (DELETE)
URL: /animal/delete/1

O número no URL (:id) corresponde ao ID do pet no banco de dados.
