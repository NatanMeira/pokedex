import request from 'supertest';
import { getConnection } from 'typeorm';
import  {app} from '../src/app';
import createConnection from '../src/database';

let token;

describe("Weathers", () =>{
    beforeAll(async () =>{
        const connection = await createConnection();
        await connection.runMigrations();

        await request(app).post("/user")
        .send({
          "name": "Natan",
          "email": "natan@email.com",
          "password": "teste123"
        });

        const tokenResponse = await request(app)
        .post('/signin')
        .send({
          email: "natan@email.com",
          password: "teste123",
        })

        token = tokenResponse.body.token;

    })

    afterAll( async ()=>{
        const connection = await getConnection();
        await connection.dropDatabase();
        await connection.close();

    })

    it("Should be able to create a new weather", async ()=>{
        const response = await request(app).post("/weather")
        .set('Authorization', `Bearer ${token}`)
        .send({
            name: "Chuva",
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    })

    it("Should be able to get all weathers", async ()=>{
        await request(app).post("/weather")
        .set('Authorization', `Bearer ${token}`)
        .send({
            name: "Deserto",
        });

        const response = await request(app).get("/weathers").set('Authorization', `Bearer ${token}`);
        expect(response.body.length).toBe(2);
    })

})
