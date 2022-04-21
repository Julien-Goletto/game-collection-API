const {gamesDataMapper, platformsDataMapper, genresDataMapper} = require('../database/models/');
const debug = require('debug')('Resolvers');

const resolvers = {
  Query: {
    games(){
      return gamesDataMapper.getAllGames();
    },
    gameInfosById(_,args){
      return gamesDataMapper.getGameInfosById(args.id);
    },
    platforms(){
      return platformsDataMapper.getAllPlatforms();
    },
    platformById(_,args){
      return platformsDataMapper.getPlatformById(args.id);
    },
    genres(){
      return genresDataMapper.getAllGenres();
    },
    genreById(_,args){
      return genresDataMapper.getGenreById(args.id);
    },
  },
  Game: {
    platforms(parent){
      debug(parent);
      return platformsDataMapper.getPlatformById(parent.id);
    },
    genres(parent){
      return genresDataMapper.getGenreById(parent.id);
    },
  },
  Platform: {
    games(parent){
      return gamesDataMapper.getGameInfosById(parent.id);
    },
  },
  Genre: {
    games(parent){
      return gamesDataMapper.getGameInfosById(parent.id);
    },
  },
};

module.exports = resolvers;

