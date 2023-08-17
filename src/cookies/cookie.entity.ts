import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Cookie extends Model {
  @Column
  id: number;

  @Column
  frase: string;
}