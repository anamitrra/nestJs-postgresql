import { Type } from "class-transformer";
import { IsAlpha, IsDecimal, IsEmail, IsEmpty, IsNumber, isNumber, IsOptional, MinLength } from "class-validator";


export class GetUserParamDto {
    
    @IsNumber()
    @Type(()=>Number )
    age: number
}