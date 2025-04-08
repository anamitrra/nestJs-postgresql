import { IsAlpha, IsDecimal, IsEmail, IsNumber, isNumber, MinLength } from "class-validator";


export class CreateUserDto {

    @IsAlpha()
    @MinLength(3, {message: ' Name should have a minimum of 3 characters.'})
    name: string;

    @IsEmail()
    email: string;
    
    @IsNumber()
    age: number
}