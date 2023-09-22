import { NestI } from './nest-i/nest-i.interface';
import { Controller, Get, Post, Body, Patch, Param, Delete ,HttpException,HttpStatus} from '@nestjs/common';
import { NestService } from './nest.service';
import { CreateNestDto } from './dto/create-nest.dto';
import { UpdateNestDto } from './dto/update-nest.dto';
import { Nest } from './entities/nest.entity';
@Controller('nest')
export class NestController {
  constructor(private readonly nestService: NestService) {}

  @Post()
  create(@Body() createNestDto: CreateNestDto) {
    return this.nestService.create(createNestDto);
  }

  @Get()
async findAll() {
  try {
    await this.nestService.findAll()
  } catch (error) { 
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN, {
      cause: error
    });
  }
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nestService.findOne(+id);
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNestDto: UpdateNestDto) {
    return this.nestService.update(+id, updateNestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nestService.remove(+id);
  }
}
