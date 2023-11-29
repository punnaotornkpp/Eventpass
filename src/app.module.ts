import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/user/users.module';
import { CountryModule } from './country/country.module';
import { AuthModule } from './authentication/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING, {
      dbName: 'my-data',
    }),
    JwtModule.register({
      //ส่วนไฟล์ .env นั้นผมไม่ได้ทำการ ignore ไว้เนื่องจากเป็นโปรเจ็ค test ครับ เพื่อง่ายต่อการ connect to db
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
    CountryModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
