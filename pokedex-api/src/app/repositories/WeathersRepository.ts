import { EntityRepository, Repository } from "typeorm";
import {Weather} from "../models/Weather";

@EntityRepository(Weather)
class WeathersRepository extends Repository<Weather>{

}

export { WeathersRepository }