import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./users/users.module";
import { TweetModule } from './tweet/tweet.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [UserModule, TweetModule, TypeOrmModule.forRootAsync({
    imports:[],
    inject:[],
useFactory:()=>({
  type: 'postgres',
  entities: [],
  synchronize: true,
  host: 'localhost',
  port: 5432,
  username:'postgres',
  password:'qwe',
  database:'nestjs'
})
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
