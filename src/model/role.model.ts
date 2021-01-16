import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('roles')
export class Role {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false, unique: true, length: 50 })
  name: string;
}
