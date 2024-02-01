import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateTotalincomeandbillDto {
    @IsNumber()
    @IsNotEmpty()
    readonly total: number;

    @IsString()
    @IsNotEmpty()
    readonly idUser: string;
}
