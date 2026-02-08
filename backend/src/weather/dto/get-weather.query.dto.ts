import { Type } from "class-transformer";
import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
  ValidateIf,
} from "class-validator";

export class GetWeatherQueryDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  city?: string;

  @ValidateIf((o: GetWeatherQueryDto) => o.city == null && o.lon != null)
  @IsDefined({ message: "lat is required when lon is provided." })
  @Type(() => Number)
  @IsNumber()
  @Min(-90)
  @Max(90)
  lat?: number;

  @ValidateIf((o: GetWeatherQueryDto) => o.city == null && o.lat != null)
  @IsDefined({ message: "lon is required when lat is provided." })
  @Type(() => Number)
  @IsNumber()
  @Min(-180)
  @Max(180)
  lon?: number;
}
