import { prop, getModelForClass } from '@typegoose/typegoose';

export class Country {
  @prop({ required: true })
  name: string;
}

export const CountryModel = getModelForClass(Country);
export const CountrySchema = CountryModel.schema;
