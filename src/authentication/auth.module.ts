import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/user/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/user.model';
import { Country, CountrySchema } from 'src/country/country.model';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret:
        'DlFFedRu9WdGz7RXGrrBoMfhgUMmle7qZGU6gilOt4XHDxVFdEvFezuD7V570bjzPQfZZLDP3ByFhYawpli9x3JhKLqumZsI7ZDf/oVSVRqQDItdGBVQeYlSbTPC71hQNtAXSLt8Nmxrz0mQW96+QnmcgCYxiQuhsaxGRf5dKaqeHsNnjyGYsuIhJWrLua0KlC0q4CV4o62IdrPW01RCqnvQshM2vun8ydL67rEwumMaqGQ05UffYGKMTdB+ug9SsPvODi2aAIb+irKNtVCiJFcwR/RXB+jxfWRuMNGcBGayI9JuvKFkCwlg8MVmMa67jZ7jwmLV/lyha7ysCM5GTA==',
      signOptions: { expiresIn: '60m' },
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema, collection: 'user' },
      { name: Country.name, schema: CountrySchema, collection: 'country' },
    ]),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    UsersService,
    ConfigService,
    LocalStrategy,
  ],
  controllers: [AuthController],
  exports: [JwtModule],
})
export class AuthModule {}
