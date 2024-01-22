import { IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateBillDto {
    @IsString()
    readonly name: string;
    
    @IsNumber()
    readonly amount: number;
    
    @IsOptional()
    @IsString()
    readonly category: string;
}
