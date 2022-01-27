import { Test, TestingModule } from '@nestjs/testing';
import { OEmedController } from './oembed.controller';

describe('OemedController', () => {
  let controller: OEmedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OEmedController],
    }).compile();

    controller = module.get<OEmedController>(OEmedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
