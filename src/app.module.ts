import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs_teste'),
    DataModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
