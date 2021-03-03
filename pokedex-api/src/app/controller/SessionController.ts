import { compare } from "bcryptjs";
import { Request, Response} from "express";
import { getCustomRepository } from 'typeorm';
import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/UserRepository";
import { sign } from 'jsonwebtoken';


class SessionController {
  
  async authenticate(request : Request, response: Response){

    const {email,password} = request.body;

    const userRepository = getCustomRepository(UserRepository);
    
    const user = await userRepository.findOne({where:{email}});

    if (!user) {
      throw new AppError('Incorrect email/password combination.');
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.');
    }

    const token = sign({username: user.name},process.env.APP_SECRET,{
      subject: user.id.toString(),
      expiresIn: '1d'
    });

    
    return response.json({user,token});
  }

}

export {SessionController}
