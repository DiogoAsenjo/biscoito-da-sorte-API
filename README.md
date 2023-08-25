# API Rest dos biscoitos da sorte.

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

Visando atingir um pouco mais do que os requisitos/objetivos resolvi fazer o desafio em NestJS (e TypeScript) e conectar o projeto a um Banco de Dados (PostgreSQL) usando uma ORM (Sequelize).

Seguindo o padrão de arquitetura do NestJS, crei o module dos Cookies junto com o seu controller (que irá organizar as rotas) e o service (que irá implementar as regras do negócio).

Consegui subir a API no Vercel e o Banco de Dados está funcionando online no Azure.

Com esse projeto pude treinar um pouco o meu tratamento de erros e os conceitos de funções sícronas e assíncronas.

### Como rodar o projeto e rotas disponíveis:

Para rodar o projeto e receber mensagens motivadoras aleatórias basta acessar o link:
[Biscoitos da sorte](https://desafio02-biscoito-da-sorte-diogoasenjo.vercel.app/cookies/aleatorio).

Porém também existem outras rotas que podem ser testadas utilizando o Postman, Insomnia ou outro serviço similar.

A rota principal é a:

- GET https://desafio02-biscoito-da-sorte-diogoasenjo.vercel.app/cookies
  Irá mostrar todas as demais rotas da API, bastando adicionar o /"nome-da-rota" na continuação da rota principal, sendo elas:

- GET /cookies/mostrar-todos
  Retorna todas as mensagens e id dos cookies existentes.

- GET /cookies/aleatorio
  Retorna uma mensagem de cookie aleatória.

- POST /cookies/adicionar
  Adiciona um novo cookie com uma mensagem positiva.
  No corpo da requisição é necessário um JSON com a chave mensagem contendo uma mensagem.

- PATCH /cookies/alterar
  Atualiza a mensagem de um cookie existente com base no ID fornecido.
  No corpo da requisição é necessário um JSON com a chave id do cookie que será atualizado e a chave mensagem com a mensagem que substituíra a antiga.

- DELETE /cookies/deletar
  Deleta um cookie com base no ID fornecido.
  No corpo da requisição é necessário um JSON com a chave id do cookie que será deletado.

Dessa forma, feita todas essas rotas consegui criar uma API Rest que possui os principais métodos HTTP e consegue executar todos os comandos básicos de um CRUD e contém um tratamento de erros.
