import {Router } from 'express';


import { PokemonController } from './app/controller/PokemonController';
import { SessionController } from './app/controller/SessionController';
import { TypeController } from './app/controller/TypeController'
import { UserController } from './app/controller/UserController';
import { WeatherController } from './app/controller/WeatherController';
import Authenticate from './app/middlewares/Authenticate';


const typeController = new TypeController();
const pokemonController = new PokemonController();
const weatherController = new WeatherController();
const userController = new UserController();
const sessionController = new SessionController();

const router = Router();

router.post('/user', userController.create);
router.post('/signin', sessionController.authenticate);

router.get('/pokemons', Authenticate,  pokemonController.index);
router.get('/pokemon/:id', Authenticate,  pokemonController.show);
router.post('/pokemon', Authenticate,  pokemonController.create);
router.put('/pokemon/:id', Authenticate,  pokemonController.update);
router.delete('/pokemon/:id', Authenticate,  pokemonController.delete);

router.get('/types', Authenticate,typeController.index);
router.post('/type', Authenticate, typeController.create);

router.get('/weathers', Authenticate, weatherController.index);
router.post('/weather', Authenticate, weatherController.create);



export { router };
