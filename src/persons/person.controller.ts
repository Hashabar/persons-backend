import { Controller, Post, Req } from '@nestjs/common';
import { PersonService } from './person.service';
import { Request } from 'express';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  @Post()
  findAll(@Req() req: Request,) {
    console.log(req.query);
    return this.personService.findAll(req.query);
  }
}
