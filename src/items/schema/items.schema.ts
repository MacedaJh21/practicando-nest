
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LibroDocument = Libro & Document;

@Schema()
export class Libro {
  @Prop()
  name: string;

  @Prop()
  autor: string;

  @Prop()
  pages: number;
}

export const LibroSchema = SchemaFactory.createForClass(Libro);
