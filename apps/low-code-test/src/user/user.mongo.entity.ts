import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;
  @Column({default:null})
  name: string;
}