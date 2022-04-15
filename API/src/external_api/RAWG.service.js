require('dotenv').config({ path: '../../.env' });
const axios = require('axios');
const {RAWG_API_KEY} = process.env;

const dataToExtract = ['name', 'platforms', 'released', 'background_image', 'genres'];

const RAWG = {
  /**
   * Get platform list to recover basic informations
   * @returns {Array} game platform objects
   */
  async GetPlatforms(RAWG_API_KEY){
    const response = await axios(`https://api.rawg.io/api/platforms?key=${RAWG_API_KEY}`);
    console.log(response.data.results);
  },
  
  /**
   * Get games list from a platform
   * @param {string} RAWG_API_KEY - API key from .env variables
   * @param {integer} platformId
   * @param {string} searchQuery
   * @returns {Array} game objects
   */
  async GetGamesFromPlatformIdAndSearchQuery (RAWG_API_KEY, platformId, searchQuery){
    const response = await axios(`https://api.rawg.io/api/games?platforms=${platformId}&search=${searchQuery}&search_exact=true&key=${RAWG_API_KEY}`);
    const results = response.data.results;

    // Formating results
    let games = [];
    for (let result of results){
      const gameObject = Object.fromEntries(Object.entries(result).filter(([key,_]) => dataToExtract.includes(key)));
      // Formating data specificly for platforms and genres  
      reformatedPlatforms = [];
      reformatedGenres = [];
      for (let platform of gameObject.platforms){
        reformatedPlatforms.push(platform.platform.name);
      }
      for (let genre of gameObject.genres){
        reformatedGenres.push(genre.name);
      }
      gameObject.platforms = reformatedPlatforms;
      gameObject.genres = reformatedGenres;
      games.push(gameObject);
    }
    console.log(games);
    return games;
  },
};

module.exports = RAWG;