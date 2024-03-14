/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Data } from "src/schemas/data.schema";
import { CreateDataDto } from "./dto/create-data.dto";

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private dataModel: Model<Data>) {}

  // Cria um novo documento Data
  create(createDataDto: CreateDataDto): Promise<Data> {
    const newData = new this.dataModel(createDataDto);
    return newData.save();
  }

  // Recupera todos os documentos Data
  getAll(): Promise<Data[]> {
    return this.dataModel.find().exec();
  }

  // Recupera um documento Data pelo ID
  getById(id: string): Promise<Data> {
    return this.dataModel.findById(id).exec();
  }

  // Atualiza um documento Data pelo ID
  update(id: string, updateDataDto: CreateDataDto): Promise<Data> {
    return this.dataModel.findByIdAndUpdate(id, updateDataDto, { new: true }).exec();
  }

  // Deleta um documento Data pelo ID
  delete(id: string): Promise<any> {
    return this.dataModel.findByIdAndDelete(id).exec();
  }

  getLast(): Promise<Data> {
    return this.dataModel.findOne().sort({ createdAt: -1 }).exec();
  }
}
