import { Sequelize } from 'sequelize-typescript';
import { Biscoitos } from 'src/biscoitos/biscoitos.model';
import { Cookie } from 'src/cookies/cookie.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432, // A porta padrão do PostgreSQL
        username: 'postgres',
        password: '123456',
        database: 'postgres',
      });
      sequelize.addModels([Cookie, Biscoitos])
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