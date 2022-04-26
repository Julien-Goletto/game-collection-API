require('dotenv').config();

const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

describe("API e2e", ()=>{
  describe('Users routes', ()=>{
    it('Should login a user, before executing game registration', async() => {
      const response = await request.post('/v1/users/login').send({pseudo: "Tatu",password: "test"});
      expect(response.status).toBe(200);
      expect(response.text).toContain("{\"pseudo\":\"Tatu\",\"isAdmin\":false}");
    });
  });
})