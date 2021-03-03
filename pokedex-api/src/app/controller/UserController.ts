import { Request, Response} from "express";
import { getCustomRepository } from 'typeorm';
import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs';

class UserController {
  
  async create(request : Request, response: Response){

    const {name,email,password} = request.body;
    
    const userRepository = getCustomRepository(UserRepository);
    
    const userExists = await userRepository.findOne({
      email
    });

    if(userExists){
        throw new AppError("User already exists");
    }
    
    const hashedPassword = await hash(password, 8);

    const user = await userRepository.create({
      name,email,password: hashedPassword
    });

    await userRepository.save(user);

    delete user.password;

    return response.status(201).json(user);

  }

}

export {UserController}
