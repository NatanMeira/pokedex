import request from 'supertest';
import { getConnection } from 'typeorm';
import  {app} from '../src/app';
import createConnection from '../src/database';

describe("Users", () =>{
    beforeAll(async () =>{
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll( async ()=>{
        const connection = await getConnection();
        await connection.dropDatabase();
        await connection.close();

    })

    it("Should be able to create a new user", async ()=>{
        const response = await request(app).post("/user")
        .send({
          "name": "Natan",
          "email": "natan@email.com",
          "password": "teste123"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    })

})
