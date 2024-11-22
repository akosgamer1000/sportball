import { Injectable } from '@nestjs/common';
import { CreateSportballDto } from './dto/create-sportball.dto';
import { UpdateSportballDto } from './dto/update-sportball.dto';

@Injectable()
export class SportballService {
  create(createSportballDto: CreateSportballDto) {
    return 'This action adds a new sportball';
  }

  findAll() {
    return `This action returns all sportball`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sportball`;
  }

  update(id: number, updateSportballDto: UpdateSportballDto) {
    return `This action updates a #${id} sportball`;
  }

  remove(id: number) {
    return `This action removes a #${id} sportball`;
  }
}
