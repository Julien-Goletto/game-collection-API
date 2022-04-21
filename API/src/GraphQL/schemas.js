const { gql } = require('apollo-server');

const schemas = gql`
  type Game{
    id: ID!
    name: String!
    released_on: String
    background_image: String
    platforms: [Platform]
    genres: [Genre]
  } 
  type Platform{
    id: ID!
    name: String!
    games: [Game]
  } 
  type Genre{
    id: ID!
    name: String!
    games: [Game]
  }
  type Query{
    "All games registered in databse"
    games: [Game]
    "All informations about a game, accessed by its Id"
    gameInfosById(id: ID!): Game
    "All registered platforms"
    platforms: [Platform]
    "Get platform by its Id"
    platformById(id: ID!): Platform
    "All registered genres"
    genres: [Genre]
    "Get genre by its Id"
    genreById(id: ID!): Genre
  }
`;
module.exports = schemas;