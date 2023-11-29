import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Country } from 'src/country/country.model';

export class User {
  @prop({ required: true })
  username: string;

  @prop({ required: true })
  password: string;

  @prop({ required: true })
  email: string;

  @prop({ ref: 'Country' })
  country: Ref<Country>;
}

export const UserModel = getModelForClass(User);
export const UserSchema = UserModel.schema;
