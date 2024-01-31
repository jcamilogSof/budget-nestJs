import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
export class CreateIncomeDto {

    @IsString()
    @IsNotEmpty()
    concept: string;

    @IsNumber()
    @IsNotEmpty()
    spent: number;

    @IsString()
    @IsNotEmpty()
    date: Date;

    @IsString()
    @IsNotEmpty()
    idUser: string;

}
