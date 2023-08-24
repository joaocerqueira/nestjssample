import { Injectable } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class SampleService {

   constructor(private prismaService: PrismaService) {}

  create(createSampleDto: CreateSampleDto) {
    return 'This action adds a new sample';
  }

  findAll() {
    return this.prismaService.sample.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} sample`;
  }

  update(id: number, updateSampleDto: UpdateSampleDto) {
    return `This action updates a #${id} sample`;
  }

  remove(id: number) {
    return `This action removes a #${id} sample`;
  }
}
