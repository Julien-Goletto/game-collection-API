const debug = require('debug')('User_Controller');
const usersDataMapper = require('../database/models/users.datamapper');
const APIError = require('../Errors/APIError');

const usersController = {
  async postNewUser(req, res) {
    const user = req.body;
    const result = await usersDataMapper.createNewUser(user);
    res.status(201).json(result);
  },
  async logUser(req, res) {
    const user = req.body;
    const result = await usersDataMapper.getUser(user);
    const returnedUser = {pseudo: result.pseudo, isAdmin: result.is_admin};
    req.session.user = returnedUser;
    res.status(200).json(returnedUser);
  },
  logOutUser(req, res) {
    if(!req.session.user){
      throw new APIError('You are not logged.')
    };
    delete req.session.user;
    res.status(200).json('You have successfuly logged out.');
  },
  async getUsersList(_,res) {
    const results = await usersDataMapper.GetUsersList();
    console.log(results);
    res.status(200).json(results);
  }
};

module.exports = usersController;