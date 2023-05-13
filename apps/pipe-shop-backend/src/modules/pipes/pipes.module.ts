import { Module } from '@nestjs/common';
import { PipesService } from './pipes.service';
import { PipesController } from './pipes.controller';

@Module({
  providers: [PipesService],
  controllers: [PipesController],
})
export class PipesModule {}
