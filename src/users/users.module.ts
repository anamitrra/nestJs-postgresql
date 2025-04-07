import { Module } from "@nestjs/common";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService] // step 2 - this makes userService injectable to another classes
})
export class UserModule {
    
}
