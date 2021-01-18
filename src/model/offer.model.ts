import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

import { OfferStatus } from 'src/constants';

@Entity('offers')
export class Offer {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false })
  status: OfferStatus;

  @Column({ nullable: false })
  requestId: string;

  @Column({ nullable: false })
  price: number;

  @Column({ length: 200 })
  decription: string;

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
    if (!this.status) this.status = OfferStatus.OPEN;
  }
}
