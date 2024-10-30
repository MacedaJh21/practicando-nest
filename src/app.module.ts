import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jharitol:jharol21@cluster0.dql5u.mongodb.net/biblioteca'),
    ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
