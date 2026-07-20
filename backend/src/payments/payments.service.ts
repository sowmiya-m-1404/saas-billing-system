import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  create(createPaymentDto: CreatePaymentDto) {
    const payment = this.paymentRepository.create(createPaymentDto);
    return this.paymentRepository.save(payment);
  }

  findAll() {
    return this.paymentRepository.find();
  }

  findOne(id: number) {
    return this.paymentRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    await this.paymentRepository.update(id, updatePaymentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const payment = await this.findOne(id);

    if (payment) {
      await this.paymentRepository.delete(id);
    }

    return {
      message: 'Payment deleted successfully',
    };
  }
}