require('dotenv').config();

const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

const session = require('supertest-session');
let testSession = session(app);

describe("API e2e", ()=>{
  beforeEach(function(done){
    testSession.post('/v1/users/login')
      .send({pseudo: "Tatu",password: "test"})
      .expect(200)
      .end(function (err) {
        if (err) return done(err);
        authenticatedSession = testSession;
        return done();
      });
  })
  describe('Games routes', ()=>{
    it('Should get all games in database', async() => {
      const response = await request.get('/v1/games');
      expect(response.status).toBe(200);
    });
    it('Should get game details from game ID', async() => {
      const gameId = 21;
      const response = await request.get('/v1/games/' + gameId);
      expect(response.status).toBe(200);
      expect (response.text).toContain("Metroid Dread");
    });
    it('Should post a new game to DB', async() => {
      const game = 
        {
          name: "Metroid Prime 42",
          platforms: ["Nintendo Switch"],
          released: "2014-02-23",
          background_image: "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
          genres: ["Platformer","Action"]
        };
      const response = await testSession.post('/v1/games/').send({...game});
      // expect(response.status).toBe(201);
      expect(response.text).toContain("\"The game has been saved into database\"");
    });
  });
})