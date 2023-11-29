import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './country.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private countryModel: ReturnModelType<typeof Country>,
  ) {}

  async createCountry(name: string): Promise<Country> {
    const checkCountry = await this.countryModel.findOne({ name }).exec();
    if (checkCountry) {
      throw new HttpException(
        'country with this name already exists',
        HttpStatus.CONFLICT,
      );
    }

    const newCountry = new this.countryModel({ name });
    return newCountry.save();
  }
}
