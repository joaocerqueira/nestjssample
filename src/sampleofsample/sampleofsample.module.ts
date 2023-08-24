import { Module } from '@nestjs/common';
import { SampleofsampleService } from './sampleofsample.service';
import { SampleofsampleController } from './sampleofsample.controller';

@Module({
  controllers: [SampleofsampleController],
  providers: [SampleofsampleService],
})
export class SampleofsampleModule {}
