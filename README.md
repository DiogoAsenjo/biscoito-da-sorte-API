# API Rest dos biscoitos da sorte (e do azar).

## Objetivo

API REST feita durante o processo de formação em Node.js da ModalGR. Visava atingir os objetivos do Desafio 02:

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

Aproveitei o sistema de módulos do NestJS e criei apenas um controller para toda a aplicação contendo todas as rotas e métodos HTTP da aplicação.

Separei a lógica do sistema entre os services dos biscoitos negativos e positivos, montando um CRUD, sendo possível:

- Listar uma mensagem aleatória (READ)
- Listar todas as mensagens (READ)
- Criar uma novamensagem (CREATE)
- Alterar alguma das mensagens (UPDATE)
- Deletar uma mensagem (DELETE)
