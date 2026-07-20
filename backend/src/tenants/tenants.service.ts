import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tenant } from './entities/tenant.entity';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';

@Injectable()
export class TenantsService {
  constructor(
    @InjectRepository(Tenant)
    private tenantRepository: Repository<Tenant>,
  ) {}

  create(createTenantDto: CreateTenantDto) {
    const tenant = this.tenantRepository.create(createTenantDto);
    return this.tenantRepository.save(tenant);
  }

  findAll() {
    return this.tenantRepository.find();
  }

  findOne(id: number) {
    return this.tenantRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateTenantDto: UpdateTenantDto) {
    await this.tenantRepository.update(id, updateTenantDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const tenant = await this.findOne(id);

    if (tenant) {
      await this.tenantRepository.delete(id);
    }

    return {
      message: 'Tenant deleted successfully',
    };
  }
}