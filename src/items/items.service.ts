import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Libro, LibroDocument } from './schema/items.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Libro.name) private ItemsModule:Model<LibroDocument>){


  }
  async create(createItemDto: CreateItemDto) {
    const itemCreated = await this.ItemsModule.create(createItemDto)
    return itemCreated
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
