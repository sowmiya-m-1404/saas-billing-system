import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tenant } from '../tenants/entities/tenant.entity';
import { Customer } from '../customers/entities/customer.entity';
import { Product } from '../products/entities/product.entity';
import { Invoice } from '../invoices/entities/invoice.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Tenant)
    private tenantRepository: Repository<Tenant>,

    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async getStats() {
    const organizations =
      await this.tenantRepository.count();

    const customers =
      await this.customerRepository.count();

    const products =
      await this.productRepository.count();

    const invoices =
      await this.invoiceRepository.count();

    const allInvoices =
      await this.invoiceRepository.find();

    const revenue = allInvoices.reduce(
      (sum, invoice) =>
        sum + Number(invoice.totalAmount),
      0,
    );

    return {
      organizations,
      customers,
      products,
      invoices,
      revenue,
    };
  }
}