import { PartialType } from '@nestjs/mapped-types';
import { CreateNestDto } from './create-nest.dto';

export class UpdateNestDto extends PartialType(CreateNestDto) {}
