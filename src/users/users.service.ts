import { Injectable } from '@nestjs/common';

@Injectable() //step 1 - an instanse of this class can be injected to any other class by nest js
export class UsersService {

     users: {id : number, name: string, email: string ,age: number}[] = [
        {id: 1, name: 'John', email: 'john@gmail.com', age:23},
        {id: 2, name: 'mark', email: 'mark@gmail.com', age: 32}
    ];

    getAllUsers(){
        return this.users;
    }
    
    getUserById(id: number){
        return this.users.find(x=> x.id === id);
    }

     createUser (user:{ id : number, name: string, email: string, age: number}) {
        this.users.push(user);
        return this.users;
     }
}
