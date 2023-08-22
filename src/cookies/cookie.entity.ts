import { Table, Column, Model, DataType, AutoIncrement } from 'sequelize-typescript';

@Table
export class Cookies extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  frase: string;
}