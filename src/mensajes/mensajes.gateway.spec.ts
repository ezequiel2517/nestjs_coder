import { Test, TestingModule } from '@nestjs/testing';
import { MensajesGateway } from './mensajes.gateway';
import { MensajesService } from './mensajes.service';

describe('MensajesGateway', () => {
  let gateway: MensajesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MensajesGateway, MensajesService],
    }).compile();

    gateway = module.get<MensajesGateway>(MensajesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
