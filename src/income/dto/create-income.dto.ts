import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
export class CreateIncomeDto {

    @IsString()
    @IsNotEmpty()
    concept: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @IsNotEmpty()
    date: Date;

    @IsString()
    @IsNotEmpty()
    idUser: string;

}
