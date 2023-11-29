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
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
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
