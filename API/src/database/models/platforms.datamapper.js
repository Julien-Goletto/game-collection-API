const client = require('../dbclient');
const debug = require('debug')("Platforms_DataMapper");
const APIError = require('../../Errors/APIError');

const platformsDataMapper = {
  async getAllPlatforms() {
    const query = 'SELECT * FROM platform;';
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("No platform saved yet", 404);
    };
    return results.rows;
  },
  async getPlatformById(platformId){
    const query = { 
      text: `SELECT * FROM "platform"
              WHERE "id" = $1;`,
      values: [platformId],
    };
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("This platform still doesn't exist in base.", 404);
    };
    return results.rows;
  }
};

module.exports = platformsDataMapper;