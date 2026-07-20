import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tenant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  companyName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  plan!: string;
}