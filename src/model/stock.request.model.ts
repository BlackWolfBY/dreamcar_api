import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

import { StockRequestStatus } from 'src/constants';

@Entity('requests')
export class StockRequest {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false })
  status: StockRequestStatus;

  @Column({ nullable: false })
  partName: string;

  @Column({ nullable: false })
  amount: number;

  @Column({ length: 200 })
  description: string;

  @Column({ nullable: false })
  expiredAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdBy: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  updatedBy: string;

  @BeforeInsert()
  beforeCreateActions() {
    if (!this.status) this.status = StockRequestStatus.OPEN;
  }
}
