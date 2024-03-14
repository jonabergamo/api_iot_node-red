/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DataService } from "./data.service";
import { Data } from "src/schemas/data.schema";
import { CreateDataDto } from "./dto/create-data.dto";

@Controller("data")
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  async getAllData(): Promise<Data[]> {
    return this.dataService.getAll();
  }

  @Get(":id")
  async getDataById(@Param("id") id: string): Promise<Data> {
    return this.dataService.getById(id);
  }

  @Post()
  async createData(@Body() data: CreateDataDto): Promise<Data> {
    return this.dataService.create(data);
  }

  @Put(":id")
  async updateData(@Param("id") id: string, @Body() data: Data): Promise<Data> {
    return this.dataService.update(id, data);
  }

  @Delete(":id")
  async deleteData(@Param("id") id: string): Promise<Data> {
    return this.dataService.delete(id);
  }
}
