import request from 'supertest';
import { getConnection } from 'typeorm';
import  {app} from '../src/app';
import createConnection from '../src/database';

let token;

describe("Pokemons", () =>{
    beforeAll(async () =>{
        const connection = await createConnection();
        await connection.runMigrations();

        await request(app).post("/user")
        .send({
          "name": "Natan",
          "email": "natan@email.com",
          "password": "teste123"
        });

        const tokenResponse = await request(app).post('/signin')
        .send({
          email: "natan@email.com",
          password: "teste123",
        })

        token = tokenResponse.body.token;

        await request(app).post("/type")
        .set('Authorization', `Bearer ${token}`)
        .send({
            name: "Grama",
        });

        await request(app).post("/type")
        .set('Authorization', `Bearer ${token}`)
        .send({
            name: "Fogo",
        });

        await request(app).post("/weather")
        .set('Authorization', `Bearer ${token}`)
        .send({
            name: "Chuva",
        });

        await request(app).post("/weather")
        .set('Authorization', `Bearer ${token}`)
        .send({
            name: "Veneno",
        });
    })

    afterAll( async ()=>{
        const connection = await getConnection();
        await connection.dropDatabase();
        await connection.close();

    })

    it("Should not be able to create a new pokemon without types", async ()=>{
      const response = await request(app).post("/pokemon")
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: "Poketeste",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        small_image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png",
        generation: 1,
        evolution_stage: 1,
        evolved: 1,
        family_id: 1,
        cross_gen: 1,
        stat_total: 1,
        atk: 1,
        def: 1,
        sta: 1,
        legendary: 1,
        aquireable: 1,
        spawns: 1,
        regional: 1,
        raidable: 1,
        hatchable: 1,
        shiny: 1,
        nest: 1,
        is_new: 1,
        not_gettable: 1,
        future_evolve: 1,
        n_100_cp_40: 1,
        n_100_cp_39: 1,
        types: [],
        weathers: [1,2]
      });

      expect(response.status).toBe(400);
    })

    it("Should not be able to create a new pokemon without weathers_ids", async ()=>{
      const response = await request(app).post("/pokemon")
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: "Poketeste",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        small_image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png",
        generation: 1,
        evolution_stage: 1,
        evolved: 1,
        family_id: 1,
        cross_gen: 1,
        stat_total: 1,
        atk: 1,
        def: 1,
        sta: 1,
        legendary: 1,
        aquireable: 1,
        spawns: 1,
        regional: 1,
        raidable: 1,
        hatchable: 1,
        shiny: 1,
        nest: 1,
        is_new: 1,
        not_gettable: 1,
        future_evolve: 1,
        n_100_cp_40: 1,
        n_100_cp_39: 1,
        types: [1,2],
        weathers: []
      });

      expect(response.status).toBe(400);
    })

    it("Should be able to create a new pokemon", async ()=>{
      const response = await request(app).post("/pokemon")
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: "Poketeste",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        small_image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png",
        generation: 1,
        evolution_stage: 1,
        evolved: 1,
        family_id: 1,
        cross_gen: 1,
        stat_total: 1,
        atk: 1,
        def: 1,
        sta: 1,
        legendary: 1,
        aquireable: 1,
        spawns: 1,
        regional: 1,
        raidable: 1,
        hatchable: 1,
        shiny: 1,
        nest: 1,
        is_new: 1,
        not_gettable: 1,
        future_evolve: 1,
        n_100_cp_40: 1,
        n_100_cp_39: 1,
        types: [1,2],
        weathers: [1,2]
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
    })

    it("Should be able to get all pokemons", async ()=>{
      await request(app).post("/pokemon")
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: "Poketeste2",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        small_image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png",
        generation: 1,
        evolution_stage: 1,
        evolved: 1,
        family_id: 1,
        cross_gen: 1,
        stat_total: 1,
        atk: 1,
        def: 1,
        sta: 1,
        legendary: 1,
        aquireable: 1,
        spawns: 1,
        regional: 1,
        raidable: 1,
        hatchable: 1,
        shiny: 1,
        nest: 1,
        is_new: 1,
        not_gettable: 1,
        future_evolve: 1,
        n_100_cp_40: 1,
        n_100_cp_39: 1,
        types: [1,2],
        weathers: [1,2]
      });

      const response = await request(app).get("/weathers").set('Authorization', `Bearer ${token}`);
      expect(response.body.length).toBe(2);
    })

    it("Should be able to update a pokemon", async ()=>{
      const response = await request(app).put("/pokemon/2")
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: "Testemon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        small_image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png",
        generation: 1,
        evolution_stage: 1,
        evolved: 1,
        family_id: 1,
        cross_gen: 1,
        stat_total: 1,
        atk: 1,
        def: 1,
        sta: 1,
        legendary: 1,
        aquireable: 1,
        spawns: 1,
        regional: 1,
        raidable: 1,
        hatchable: 1,
        shiny: 1,
        nest: 1,
        is_new: 1,
        not_gettable: 1,
        future_evolve: 1,
        n_100_cp_40: 1,
        n_100_cp_39: 1,
        types: [1,2],
        weathers: [1,2]
      });

      expect(response.body.name).toBe("Testemon");
    })

    it("Should be able to delete a pokemon", async ()=>{
      const response = await request(app).delete("/pokemon/1")
      .set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(200);
    })

})
