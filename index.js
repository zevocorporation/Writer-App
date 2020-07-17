const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schema/index');
const resolvers = require('./graphql/resolvers/index');
require('dotenv').config();

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.urlencoded());

server.applyMiddleware({ app });

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-jy47h.mongodb.net/writer-app?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(4000, () => {
      console.log(`Server running at http://localhost:4000/graphql`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
