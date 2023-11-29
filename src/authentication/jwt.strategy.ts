import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        'DlFFedRu9WdGz7RXGrrBoMfhgUMmle7qZGU6gilOt4XHDxVFdEvFezuD7V570bjzPQfZZLDP3ByFhYawpli9x3JhKLqumZsI7ZDf/oVSVRqQDItdGBVQeYlSbTPC71hQNtAXSLt8Nmxrz0mQW96+QnmcgCYxiQuhsaxGRf5dKaqeHsNnjyGYsuIhJWrLua0KlC0q4CV4o62IdrPW01RCqnvQshM2vun8ydL67rEwumMaqGQ05UffYGKMTdB+ug9SsPvODi2aAIb+irKNtVCiJFcwR/RXB+jxfWRuMNGcBGayI9JuvKFkCwlg8MVmMa67jZ7jwmLV/lyha7ysCM5GTA==',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
