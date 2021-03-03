import { Request, Response} from "express";
import {getCustomRepository} from 'typeorm';
import { AppError } from "../errors/AppError";
import { WeathersRepository } from "../repositories/WeathersRepository";

class WeatherController {
  
  async index(request : Request, response: Response){
  
      const weatherRepository = getCustomRepository(WeathersRepository);

      const weather = await weatherRepository.find();

      if (!weather) {
        throw new AppError("Weather not found!");
      }

      return response.json(weather);
  }
  
  async create(request : Request, response: Response){
    try {
      const {name} = request.body;

      const weatherRepository = getCustomRepository(WeathersRepository);

      const weather = await weatherRepository.create({
        name
      });

      await weatherRepository.save(weather);

      return response.status(201).json(weather);
    } catch (error) {
      throw new AppError("Unexpected error while creating a new Weather.");
    }
  }

}

export {WeatherController};
