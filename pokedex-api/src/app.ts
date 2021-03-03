import * as dotenv from "dotenv";
import 'reflect-metadata';
import createConnection from './database';
import express from 'express';
import 'express-async-errors'; 
import {router} from './routes';
import { pagination } from 'typeorm-pagination'
import cors from 'cors'
import ErrorValidation from '../src/app/middlewares/ErrorValidation';

dotenv.config({ path: '.env' });
const app = express();

createConnection();

app.use(cors());
app.use(express.json());
app.use(pagination);
app.use(router);
app.use(ErrorValidation);


export { app }

