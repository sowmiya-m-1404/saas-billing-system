import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  invoiceId!: number;

  @Column('decimal')
  amount!: number;

  @Column()
  paymentMethod!: string;

  @Column()
  paymentDate!: string;

  @Column()
  status!: string;
}