# API Rest dos biscoitos da sorte (e do azar).

## Tecnologias utilizadas:

- NestJS
- Express
- TypeScript

## Objetivo

Feito como parte do processo de formação em NodeJS da ModalGR para treinar os conceitos de requisições HTTP.

## Como foi feito

Aproveitei o sistema de módulos do NestJS e criei apenas um controller para toda a aplicação contendo todas as rotas e métodos HTTP da aplicação.

Separei a lógica do sistema entre os services dos biscoitos negativos e positivos, montando um CRUD, sendo possível:

- Listar uma mensagem aleatória (READ)
- Listar todas as mensagens (READ)
- Criar uma novamensagem (CREATE)
- Alterar alguma das mensagens (UPDATE)
- Deletar uma mensagem (DELETE)
