require('dotenv').config();

const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

const session = require('supertest-session');
const testSession = session(app);
const adminSession = session(app);

const testUser = {
  pseudo: 'Tutu',
  password: 'Test',
}

const adminUser = {
  pseudo: process.env.ADMIN_PSEUDO,
  password: process.env.ADMIN_PASSWORD,
}

describe("API e2e", () =>{
  beforeAll( async() => {
    await testSession.post('/v1/users/register')
      .send(testUser);
    await testSession.post('/v1/users/login')
      .send(testUser);
    await adminSession.post('/v1/users/login')
      .send(adminUser);
  });
  describe('Games routes', () => {
    it('Should get all games in database', async() => {
      const response = await request.get('/v1/games');
      expect(response.status).toBe(200);
    });
    it('Should get game details from game ID', async() => {
      let gameId = 1;
      const response = await request.get('/v1/games/' + gameId);
      expect(response.status).toBe(200);
      expect (response.text).toContain("Metroid Dread");
    });
    it('Should get a game object from RAWG API', async() => {
      let game = 
        {
          platformId: 7,
          gameTitle: "Super Mario Odyssey",
        };
      const response = await testSession.post('/v1/games/newgame').send(game);
      expect(response.status).toBe(200);
      expect(response.text).toContain("Super Mario Odyssey");
    });
    it('Should post a new game to DB', async() => {
      game = 
        {
          name: "Metroid Prime 18",
          platforms: ["Nintendo Switch"],
          released: "2014-02-23",
          background_image: "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
          genres: ["Platformer","Action"]
        };
      const response = await testSession.post('/v1/games/').send(game);
      expect(response.status).toBe(201);
      expect(response.text).toContain("The game has been saved into database");
    });
    it('Should delete a game from DB', async() => {
      gameTitle = game.name;
      const response = await adminSession.delete('/v1/games/' + game.title);
      expect(response.status).toBe(200);
      expect(response.text).toContain("The game has been deleted from database");
    });
    afterAll( async() => {
        await adminSession.delete('/v1/users/' + testUser.pseudo);
      });
  });
})