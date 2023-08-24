import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SampleofsampleService } from './sampleofsample.service';
import { CreateSampleofsampleDto } from './dto/create-sampleofsample.dto';
import { UpdateSampleofsampleDto } from './dto/update-sampleofsample.dto';

@Controller('sampleofsample')
export class SampleofsampleController {
  constructor(private readonly sampleofsampleService: SampleofsampleService) {}

  @Post()
  create(@Body() createSampleofsampleDto: CreateSampleofsampleDto) {
    return this.sampleofsampleService.create(createSampleofsampleDto);
  }

  @Get()
  findAll() {
    return this.sampleofsampleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sampleofsampleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSampleofsampleDto: UpdateSampleofsampleDto) {
    return this.sampleofsampleService.update(+id, updateSampleofsampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sampleofsampleService.remove(+id);
  }
}
