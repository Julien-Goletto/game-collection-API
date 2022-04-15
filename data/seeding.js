const RAWG = require('../API/src/external_api/RAWG.service');
require('dotenv').config({ path: '../API/.env' });
const {RAWG_API_KEY} = process.env;
console.log(RAWG_API_KEY);

gamesToAdd = [
  'Metroid Dread','Hollow Knigh','FEZ','Undertale','Hades','Bayonetta','The Legend of Zelda: Breath of the Wild',
  'Dark Souls: Remastered','Gris','Slay The Spire','SuperMario Odyssey','Into The Breach','Invisible, Inc.','Okami HD',
  'Dungeon of the Endless','Downwell','Street of Rage 4','Kirby and the Forgotten Land','Triangle Strategy','Shin Megami Tensei V'
];

// gamesPayload = [];
// async function createGamesPayload (plateformId, gamesToAdd){
//   for (gameTitle of gamesToAdd){
//     const results = RAWG.GetGamesFromPlatformIdAndSearchQuery (plateformId, gameTitle);
//     gamesPayload.push(results)
//   };
// }

// console.log(createGamesPayload(7, gamesToAdd));

const result = RAWG.GetGamesFromPlatformIdAndSearchQuery(RAWG_API_KEY, 7, 'Metroid Dread');
console.log(result);