import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CountryModule } from 'src/country/country.module';
import { Country } from 'src/country/country.model';
import { CountrySchema } from 'src/country/country.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema, collection: 'user' },
      { name: Country.name, schema: CountrySchema, collection: 'country' },
    ]),
    CountryModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
