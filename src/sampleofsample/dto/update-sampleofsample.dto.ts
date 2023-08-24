import { PartialType } from '@nestjs/mapped-types';
import { CreateSampleofsampleDto } from './create-sampleofsample.dto';

export class UpdateSampleofsampleDto extends PartialType(CreateSampleofsampleDto) {}
