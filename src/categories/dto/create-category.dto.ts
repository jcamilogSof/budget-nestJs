import { IsString, IsNotEmpty, IsDate } from 'class-validator';
export class CreateCategoryDto {
    
        @IsNotEmpty()
        @IsString()
        readonly name: string;
    
        @IsNotEmpty()
        @IsString()
        readonly idUser: string;

        @IsNotEmpty()
        @IsDate()
        readonly date: string;
    
}
