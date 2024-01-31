import { PartialType } from '@nestjs/swagger';
import { CreateTotalincomeandbillDto } from './create-totalincomeandbill.dto';

export class UpdateTotalincomeandbillDto extends PartialType(CreateTotalincomeandbillDto) {}
