import { Test, TestingModule } from '@nestjs/testing';
import { TotalincomeandbillsController } from './totalincomeandbills.controller';
import { TotalincomeandbillsService } from './totalincomeandbills.service';

describe('TotalincomeandbillsController', () => {
  let controller: TotalincomeandbillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TotalincomeandbillsController],
      providers: [TotalincomeandbillsService],
    }).compile();

    controller = module.get<TotalincomeandbillsController>(TotalincomeandbillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
