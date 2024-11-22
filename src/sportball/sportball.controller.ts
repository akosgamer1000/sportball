import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SportballService } from './sportball.service';
import { CreateSportballDto } from './dto/create-sportball.dto';
import { UpdateSportballDto } from './dto/update-sportball.dto';

@Controller('sportball')
export class SportballController {
  constructor(private readonly sportballService: SportballService) {}

  @Post()
  create(@Body() createSportballDto: CreateSportballDto) {
    return this.sportballService.create(createSportballDto);
  }

  @Get()
  findAll() {
    return this.sportballService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportballService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSportballDto: UpdateSportballDto) {
    return this.sportballService.update(+id, updateSportballDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportballService.remove(+id);
  }
}
