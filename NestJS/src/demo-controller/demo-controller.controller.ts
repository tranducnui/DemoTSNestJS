import { CreateNestDto } from './../nest/dto/create-nest.dto';
import { UpdateNestDto } from './../nest/dto/update-nest.dto';
import { Controller, Query,Param,Get, Body,Put,Delete, Post, Redirect} from '@nestjs/common';
import { Response } from 'express';
@Controller('demo-controller')
export class DemoControllerController {
    @Get()
    findAll():string{
        return 'this action returns demo file';
    }
    
    
    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
    if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
    }
    }

    @Get(':id')
    findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
    }
    
    @Post()
    create(@Body() createCatDto: CreateNestDto) {
      return 'This action adds a new cat';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateNestDto) {
      return `This action updates a #${id} cat`;
    }
}
