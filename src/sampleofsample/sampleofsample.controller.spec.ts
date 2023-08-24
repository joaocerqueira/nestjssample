import { Test, TestingModule } from '@nestjs/testing';
import { SampleofsampleController } from './sampleofsample.controller';
import { SampleofsampleService } from './sampleofsample.service';

describe('SampleofsampleController', () => {
  let controller: SampleofsampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleofsampleController],
      providers: [SampleofsampleService],
    }).compile();

    controller = module.get<SampleofsampleController>(SampleofsampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
