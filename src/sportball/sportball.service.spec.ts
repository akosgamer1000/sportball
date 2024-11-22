import { Test, TestingModule } from '@nestjs/testing';
import { SportballService } from './sportball.service';

describe('SportballService', () => {
  let service: SportballService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportballService],
    }).compile();

    service = module.get<SportballService>(SportballService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
