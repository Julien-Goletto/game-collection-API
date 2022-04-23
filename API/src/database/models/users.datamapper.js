const client = require('../dbclient');
const debug = require('debug')("User_DataMapper");
const APIError = require('../../Errors/APIError');

const usersDataMapper = {
  /**
   * Save a  new user in database
   * @param {Object} user 
   * @returns {String} feedback message
   * @throws {APIError} if user already in base, due to unique constraint
   */
  async createNewUser(user) {
    const query = {
      text : `INSERT INTO "user"("pseudo","password") VALUES ($1,$2)`,
      values:[user.pseudo,user.password],
    }
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("This pseudo is already taken. Please choose another one.", 404);
    };
    return 'User successfully registered, please login to continue.';
  },
  /**
   * From a user object, return a matching user
   * @param {Object} user 
   * @returns {Object} user informations from db to be processed in controller
   * @throws {APIError} if credentials doesn't match
   */
  async getUser(user) {
    const query = {
      text : `SELECT pseudo, is_admin, password FROM "user"
              WHERE pseudo = $1 AND password = $2`,
      values:[user.pseudo,user.password],
    }
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("Credentials don't match, please retry.", 404);
    };
    return results.rows[0];
  },
  /**
   * Return a list containing all registered users
   * @returns {ARRAY} of pseudos String
   * @throws {APIError} if the table user is empty
   */
  async GetUsersList(){
    const query = `SELECT array_agg(pseudo) AS "registered_users" FROM "user";`;
    const results = await client.query(query);
    if(!results.rowCount){
      throw new APIError ("No user registered yet.", 404);
    };
    return results.rows[0].registered_users;
  }
};

module.exports = usersDataMapper;