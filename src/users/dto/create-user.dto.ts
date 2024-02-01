import { IsNotEmpty, IsNumber, IsString, Validate, IsEmail } from 'class-validator'
import { PasswordValidator } from '../../utils/validators/password.validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly lastname: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @Validate(PasswordValidator)
    readonly password: string;

    @IsNumber()
    @IsNotEmpty()
    readonly identification: number;

    @IsNumber()
    @IsNotEmpty()
    readonly number: number;

    @IsString()
    @IsNotEmpty()
    readonly typeDocument: string;
}
