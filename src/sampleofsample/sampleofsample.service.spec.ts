import { Test, TestingModule } from '@nestjs/testing';
import { SampleofsampleService } from './sampleofsample.service';

describe('SampleofsampleService', () => {
  let service: SampleofsampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleofsampleService],
    }).compile();

    service = module.get<SampleofsampleService>(SampleofsampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
