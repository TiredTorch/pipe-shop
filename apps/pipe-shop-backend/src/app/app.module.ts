import { Module } from '@nestjs/common';
import { UsersModule, BasketsModule, PipesModule } from '../modules';


@Module({
  imports: [
    UsersModule,
    BasketsModule,
    PipesModule
  ],
})

export class AppModule { }
