import { PartialType } from '@nestjs/mapped-types';
import { CreateSportballDto } from './create-sportball.dto';

export class UpdateSportballDto extends PartialType(CreateSportballDto) {}
