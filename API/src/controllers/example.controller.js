const debug = require('debug')('Example_Controller');
const { exampleDataMapper } = require('.');
const { getExample } = require('../database/example.datamapper');

const exampleController = {
  async getExample(req, res) {
    const result = await exampleDataMapper.getExample;
    debug(result);
    res.status(200).json(result);
  },
};