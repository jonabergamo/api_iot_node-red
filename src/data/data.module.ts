/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Data, DataSchema } from "src/schemas/data.schema";
import { DataService } from "./data.service";
import { DataController } from "./data.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: Data.name, schema: DataSchema }])],
  controllers: [DataController],
  providers: [DataService],
  exports: [DataService],
})
export class DataModule {}
