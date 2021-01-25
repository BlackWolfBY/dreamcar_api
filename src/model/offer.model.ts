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
  _id: ObjectID;

  get id(): string {
    return this._id.toString();
  }

  @Column({ nullable: false })
  status: OfferStatus;

  @Column({ nullable: false })
  requestId: string;

  @Column({ nullable: false })
  price: number;

  @Column({ length: 200 })
  description: string;

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
