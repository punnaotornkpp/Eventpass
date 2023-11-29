import { Controller, Post, Body } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post('add')
  async createUser(@Body('name') name: string) {
    return this.countryService.createCountry(name);
  }
}
