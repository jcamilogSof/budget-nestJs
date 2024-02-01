import { IsString, IsNumber, IsOptional, IsNotEmpty, IsDate } from 'class-validator';
export class CreateBillDto {

    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;
    
    @IsOptional()
    @IsString()
    readonly category: string;

    @IsNotEmpty()
    @IsString()
    readonly idUser: string;

    @IsNotEmpty()
    @IsString()
    readonly typeCurrency: string;

    @IsNotEmpty()
    readonly date: Date;
}
