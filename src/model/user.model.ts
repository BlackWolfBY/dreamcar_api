import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('users')
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ unique: true, nullable: false, length: 100 })
  login: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  roleId: string;

  @Column({ nullable: false, unique: true })
  email: string;
}
