require('dotenv').config();
const debug = require('debug')("App");
const { ApolloServer } = require('apollo-server');
const{ schemas, resolvers } = require('./src/GraphQL');
// const cors = require('cors');

const { PORT } = process.env;
const app = new ApolloServer({typeDefs: schemas, resolvers});

app.listen(PORT).then(({url})=> debug(`🚀  Server ready at ${url}`));