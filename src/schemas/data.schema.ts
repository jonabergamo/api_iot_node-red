import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Data {
  @Prop({ required: true })
  sensor: boolean;

  @Prop({ required: true })
  botao: boolean;

  @Prop({ required: true })
  LigaRobo: boolean;

  @Prop({ required: true })
  ResetContador: boolean;

  @Prop({ required: true })
  ValorContagem: number;
}

export type DataDocument = Data & Document;

export const DataSchema = SchemaFactory.createForClass(Data);
