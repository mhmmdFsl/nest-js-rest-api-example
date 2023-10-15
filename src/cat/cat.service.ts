import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CatEntity } from './cat.entity';
import { AddCatDto } from "./add-cat.dto";

@Injectable()
export class CatService {
  constructor(
    @Inject('CAT_REPOSITORY')
    private readonly catRepository: Repository<CatEntity>,
  ) {}

  async addCat(addCatDto: AddCatDto): Promise<CatEntity> {
    const catEntity = new CatEntity();
    catEntity.name = addCatDto.name;
    catEntity.breed = addCatDto.breed;
    return this.catRepository.save(catEntity);
  }

  async findALl(): Promise<CatEntity[]> {
    return this.catRepository.find();
  }

  async findById(id: number) {
    return this.catRepository.findOneBy({id: id});
  }
}
