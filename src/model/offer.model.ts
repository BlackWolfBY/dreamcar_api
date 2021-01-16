import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('offers')
export class Offer {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: false })
  requestId: string;

  @Column({ nullable: false })
  price: number;

  @Column({ length: 200 })
  decription: string;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column()
  createdBy: string;

  @Column({ type: 'timestamp' })
  updatedAt: Date;

  @Column()
  updatedBy: string;
}
