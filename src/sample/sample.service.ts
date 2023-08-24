import { Injectable } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class SampleService {

   constructor(private prismaService: PrismaService) {}

  create(createSampleDto: CreateSampleDto) {
    /*return 'createSample'*/
    return this.prismaService.sample.create({
      data: createSampleDto,
    });
  }

  findAll() {
    return this.prismaService.sample.findMany();
  }

  findOne(id: number) {
    //throw new MyXptoException();
    return this.prismaService.sample.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateSampleDto: UpdateSampleDto) {
    return this.prismaService.sample.update({
      where: { id },
      data: updateSampleDto,
    });
  }

  remove(id: number) {
    return this.prismaService.sample.delete({
      where: { id },
    });
  }
}
