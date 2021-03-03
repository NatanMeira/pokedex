import request from 'supertest';
import { getConnection } from 'typeorm';
import  {app} from '../src/app';
import createConnection from '../src/database';


describe("Authentication", () =>{
    beforeAll(async () =>{
        const connection = await createConnection();
        await connection.runMigrations();

        await request(app).post("/user")
        .send({
          "name": "Natan",
          "email": "natan@email.com",
          "password": "teste123"
        });
    })

    afterAll( async ()=>{
        const connection = await getConnection();
        await connection.dropDatabase();
        await connection.close();

    })

    it("Should be able to authenticate with user credentials", async ()=>{
        const response = await request(app).post("/signin")
        .send({
          "email": "natan@email.com",
          "password": "teste123"
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("token");
    })

})
