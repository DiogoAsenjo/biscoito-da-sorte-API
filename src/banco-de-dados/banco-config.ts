import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: () => {
      return new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432, // A porta padrão do PostgreSQL
        username: 'usuario',
        password: '123456',
        database: 'frases',
      });
    },
  },
];

//Aqui é como está na documentação que eles importam um modelo de gato, vou deixar como exemplo para caso precisa usar um modelo no futuro.
/* export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
]; */