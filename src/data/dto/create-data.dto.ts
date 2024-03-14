import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateDataDto {
  @IsNotEmpty()
  @IsBoolean()
  sensor: boolean;

  @IsNotEmpty()
  @IsBoolean()
  botao: boolean;

  @IsNotEmpty()
  @IsBoolean()
  LigaRobo: boolean;

  @IsNotEmpty()
  @IsBoolean()
  ResetContador: boolean;

  @IsNotEmpty()
  @IsNumber()
  ValorContagem: number;
}
