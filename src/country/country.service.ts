import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './country.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private countryModel: ReturnModelType<typeof Country>,
  ) {}

  async createCountry(name: string): Promise<Country> {
    const newCountry = new this.countryModel({ name });
    return newCountry.save();
  }
}
