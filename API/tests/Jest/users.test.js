require('dotenv').config();

const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

const session = require('supertest-session');
let testSession = session(app);

describe("API e2e", ()=>{
  describe('Users routes', ()=>{
    it('Should register a new user in databse', async() => {
      const response = await request.post('/v1/users/register').send({pseudo: "Test4",password: "test"});
      expect(response.status).toBe(201);
      expect(response.text).toContain("\"User successfully registered, please login to continue.\"");
    });
    it('Should login a user, before executing game registration', async() => {
      const response = await testSession.post('/v1/users/login').send({pseudo: "Tatu",password: "test"});
      expect(response.status).toBe(200);
      expect(response.text).toContain("{\"pseudo\":\"Tatu\",\"isAdmin\":false}");
    });
    it('Should logout a logged in user', async() => {
      const response = await testSession.get('/v1/users/logout');
      expect(response.status).toBe(200);
      expect(response.text).toContain("You have successfuly logged out.");
    });
    it('Should return an array with all registered users', async() => {
      const response = await testSession.get('/v1/users/');
      expect(response.status).toBe(200);
    });
  });
})