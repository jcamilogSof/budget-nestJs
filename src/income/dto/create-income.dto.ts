import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
export class CreateIncomeDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsNumber()
    readonly identification: number;

}
