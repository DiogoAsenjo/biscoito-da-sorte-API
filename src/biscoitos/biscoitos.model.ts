import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Biscoito extends Model {
/*   @Column({
    type: DataType.NUMBER,
    primaryKey: true,
    allowNull: false,
  })
  id: number; */

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  frase: string;
}