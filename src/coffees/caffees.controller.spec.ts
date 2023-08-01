import { Test, TestingModule } from '@nestjs/testing';
import { CaffeesController } from './coffees.controller';

describe('CaffeesController', () => {
  let controller: CaffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaffeesController],
    }).compile();

    controller = module.get<CaffeesController>(CaffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
