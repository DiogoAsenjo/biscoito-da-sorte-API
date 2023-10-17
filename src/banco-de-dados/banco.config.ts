import { Sequelize } from 'sequelize-typescript';
import { Cookies } from 'src/cookies/cookie.entity';
import pg from 'pg';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.HOST, //'localhost',
        port: 5432, // A porta padrão do PostgreSQL
        username: process.env.USER, //'postgres',
        password: process.env.PASSWORD, //'123456',
        database: 'postgres',
        dialectModule: pg, //Necessário para o deploy na Vercel
        dialectOptions: {
          //Necessário para usar o servidor Postgre no Azure
          ssl: {
            require: true,
          },
        },
      });
      sequelize.addModels([Cookies]);
      await sequelize.sync();

      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

      return sequelize;
    },
  },
];
