# API Rest dos biscoitos da sorte (e do azar).

## Objetivo

API REST feita durante o processo de formação em Node.js da ModalGR. Visava atingir os objetivos do Desafio 02, que trata de biscoitos da sorte, no qual teríamos que criar um sistema que retorna uma mensagem de biscoito da sorte.

- Criar e exportar módulos
- Realizar chamadas HTTP
- Processamento assíncrono

## Tecnologias utilizadas:

- NestJS
- Express
- TypeScript
- Sequelize
- PostgreSQL

## Como foi feito

### Primeira versão (Biscoitos)

Como estou utilizando o NestJS, aproveitei sua arquitetura de modules, controllers e service para construir a primeira versão da aplicação, da pasta "biscoitos" que usa apenas memória local, com um array de strings.

Nela, além do Module principal criei o Service tanto dos biscoitos positivos, quanto dos negativos.

Apesar do Desafio pedir apenas o retorno de uma mensagem de biscoito da sorte aleatória, resolvi criar métodos adicionais em cada tipo de biscoito, através das requisições HTTP, é possível buscar um biscoito aleatório, listar todos os biscoitos, adicionar uma novamensagem, deletar uma mensagem e ainda alterar a mensagem, ou seja, um CRUD.

### Segunda versão (Cookies)

Visando aprimorar o projeto sem desperdicar o que já havia sido feito. Resolvi conectar o projeto a um Banco de Dados (PostgreSQL) usando uma ORM (Sequelize).

Feito isso, criei o Module de Cookies, que faz a mesma coisa da primeira versão, mas com outro nome e conectado a um banco de dados.

Assim, pude treinar os conceitos de funções assíncronas e tratamento de erros.

### Geral

No projeto, além das ferramentas, também pude testar todos os principais tipos de requisições HTTP (GET, POST, PATCH, DELETE).
