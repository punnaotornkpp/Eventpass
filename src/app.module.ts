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
      // process.env.JWT_SECRET ตอนผมเขียนนั้นไม่สามารถดึงจาก .env ได้เพราะฉะนั้นผมเลยกำหนดเองแบบ static ไม่ได้ซ่อนไว้ใน .env
      //ส่วนไฟล์ .env นั้นผมไม่ได้ทำการ ignore ไว้เนื่องจากเป็นโปรเจ็ค test ครับ เพื่อง่ายต่อการ connect to db
      secret:
        'DlFFedRu9WdGz7RXGrrBoMfhgUMmle7qZGU6gilOt4XHDxVFdEvFezuD7V570bjzPQfZZLDP3ByFhYawpli9x3JhKLqumZsI7ZDf/oVSVRqQDItdGBVQeYlSbTPC71hQNtAXSLt8Nmxrz0mQW96+QnmcgCYxiQuhsaxGRf5dKaqeHsNnjyGYsuIhJWrLua0KlC0q4CV4o62IdrPW01RCqnvQshM2vun8ydL67rEwumMaqGQ05UffYGKMTdB+ug9SsPvODi2aAIb+irKNtVCiJFcwR/RXB+jxfWRuMNGcBGayI9JuvKFkCwlg8MVmMa67jZ7jwmLV/lyha7ysCM5GTA==',
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
