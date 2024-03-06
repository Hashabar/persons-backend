import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async findAll(query: any): Promise<any> {
    const [persons, totalItems] = await this.personRepository.findAndCount({
      skip: query.skip,
      take: query.take,
    });
    return { persons, totalItems };
  }
}
