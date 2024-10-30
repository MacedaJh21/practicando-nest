import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import {Libro, LibroSchema} from './schema/items.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Libro.name,
        schema: LibroSchema,
      }
    ])
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
