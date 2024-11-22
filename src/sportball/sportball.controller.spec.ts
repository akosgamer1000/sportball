import { Test, TestingModule } from '@nestjs/testing';
import { SportballController } from './sportball.controller';
import { SportballService } from './sportball.service';

describe('SportballController', () => {
  let controller: SportballController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportballController],
      providers: [SportballService],
    }).compile();

    controller = module.get<SportballController>(SportballController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
