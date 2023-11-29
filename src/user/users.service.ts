import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateUserDto } from './dto/user.dto';
import { Country } from 'src/country/country.model';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: ReturnModelType<typeof User>,
    @InjectModel(Country.name)
    private countryModel: ReturnModelType<typeof Country>,
  ) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const username = data.username;
    const checkUser = await this.userModel.findOne({ username }).exec();
    if (checkUser) {
      throw new HttpException(
        'user with this name already exists',
        HttpStatus.CONFLICT,
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const selectedCountry = await this.countryModel.findOne({
      name: data.country,
    });

    const newUser = new this.userModel({
      email: data.email,
      password: hashedPassword,
      username: data.username,
      country: selectedCountry._id,
    });

    return newUser.save();
  }

  async findOne(username: string): Promise<User | null> {
    return await this.userModel.findOne({ username }).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findById(T: string): Promise<User | null> {
    return await this.userModel.findById(T).exec();
  }
}
