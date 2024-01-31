import { IsString, IsNumber, IsOptional, IsNotEmpty, IsDate } from 'class-validator';
export class CreateBillDto {

    @IsNotEmpty()
    @IsNumber()
    readonly spent: number;
    
    @IsOptional()
    @IsString()
    readonly category: string;

    @IsNotEmpty()
    @IsString()
    readonly idUser: string;

    @IsNotEmpty()
    @IsDate()
    readonly date: string;

    @IsNotEmpty()
    @IsString()
    readonly typeCurrency: string;
}
