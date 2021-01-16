import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('requests')
export class StockRequest {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: false })
  partName: string;

  @Column({ nullable: false })
  amount: number;

  @Column({ length: 200 })
  decription: string;

  @Column({ nullable: false })
  expiredAt: Date;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column()
  createdBy: string;

  @Column({ type: 'timestamp' })
  updatedAt: Date;

  @Column()
  updatedBy: string;
}
