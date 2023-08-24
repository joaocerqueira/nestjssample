import { Injectable } from '@nestjs/common';
import { CreateSampleofsampleDto } from './dto/create-sampleofsample.dto';
import { UpdateSampleofsampleDto } from './dto/update-sampleofsample.dto';

@Injectable()
export class SampleofsampleService {
  create(createSampleofsampleDto: CreateSampleofsampleDto) {
    return 'This action adds a new sampleofsample';
  }

  findAll() {
    return `This action returns all sampleofsample`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sampleofsample`;
  }

  update(id: number, updateSampleofsampleDto: UpdateSampleofsampleDto) {
    return `This action updates a #${id} sampleofsample`;
  }

  remove(id: number) {
    return `This action removes a #${id} sampleofsample`;
  }
}
