import { Test, TestingModule } from '@nestjs/testing';
import { TotalincomeandbillsService } from './totalincomeandbills.service';

describe('TotalincomeandbillsService', () => {
  let service: TotalincomeandbillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TotalincomeandbillsService],
    }).compile();

    service = module.get<TotalincomeandbillsService>(TotalincomeandbillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
