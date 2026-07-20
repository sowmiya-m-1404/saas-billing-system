import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  invoiceNumber!: string;

  @Column()
  customerId!: number;

  @Column()
  productId!: number;

  @Column()
  quantity!: number;

  @Column('decimal')
  totalAmount!: number;

  @Column()
  invoiceDate!: string;

  @Column({
    default: 'Pending',
  })
  status!: string;

  @Column({
    default: 'Cash',
  })
  paymentMethod!: string;

  @Column({
    nullable: true,
  })
  dueDate!: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  notes!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}