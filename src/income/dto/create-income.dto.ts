import { IsNotEmpty, IsNumber, IsString, IsPositive, Validate } from 'class-validator';
import { AmountValidator } from '../../utils/validators/amout.validator';
export class CreateIncomeDto {

    @IsString()
    @IsNotEmpty()
    concept: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @Validate(AmountValidator)
    amount: number;

    @IsString()
    @IsNotEmpty()
    date: Date;

    @IsString()
    @IsNotEmpty()
    idUser: string;

}
