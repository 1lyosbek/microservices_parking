import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewayController } from './user.controller';
import { ApiGatewayService } from './user.service';

describe('ApiGatewayController', () => {
  let controller: ApiGatewayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiGatewayController],
      providers: [ApiGatewayService],
    }).compile();

    controller = module.get<ApiGatewayController>(ApiGatewayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
