import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('functions')
export class RoleFunction {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false, unique: true, length: 50 })
  name: string;

  @Column({ nullable: false, length: 100 })
  description: string;
}
