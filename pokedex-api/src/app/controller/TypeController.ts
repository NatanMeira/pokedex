import { Request, Response} from "express";
import {getCustomRepository} from 'typeorm';
import { AppError } from "../errors/AppError";
import { TypesRepository } from "../repositories/TypesRepository";

class TypeController {
  
  async index(request : Request, response: Response){
 
      const typeRepository = getCustomRepository(TypesRepository);

      const type = await typeRepository.find();

      if (!type) {
        throw new AppError("Type not found!");
        
      }

      return response.json(type);

  }
  
  async create(request : Request, response: Response){
    try {
      const {name} = request.body;
      
      const typeRepository = getCustomRepository(TypesRepository);

      const type = await typeRepository.create({
        name
      });

      await typeRepository.save(type);

      return response.status(201).json(type);
    } catch (error) {
      throw new AppError("Unexpected error while creating a new Type.");
    }
  }

}

export {TypeController}
