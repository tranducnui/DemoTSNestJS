import { Injectable,Inject } from '@nestjs/common';
import { CreateNestDto } from './dto/create-nest.dto';
import { UpdateNestDto } from './dto/update-nest.dto';
import { Nest } from './entities/nest.entity';
@Injectable()
export class NestService {
  private readonly nests :Nest[]=[];
  create(nest : Nest) {
    this.nests.push(nest);
  }

  findAll():Nest[] {
    return this.nests;
  }

  findOne(id: number) {
    return `This action returns a #${id} nest`;
  }

  update(id: number, updateNestDto: UpdateNestDto) {
    return `This action updates a #${id} nest`;
  }

  remove(id: number) {
    return `This action removes a #${id} nest`;
  }
}
