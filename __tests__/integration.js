//Testing dependencies

//has query and mutate functions to run queries on server
const { createTestClient } = require('apollo-server-testing');

//to parse queries
const gql = require('graphql-tag'); //To parse queries

//To create test server
const { ApolloServer } = require('apollo-server');
const typeDefs = require('../graphql/schema/index');
const resolvers = require('../graphql/resolvers/index');
const mongoose = require('mongoose');

//To drop database from test
const Abstract = require('../models/abstract');

require('dotenv').config();
//Max of 30secs to run all tests
jest.setTimeout(30000);

const server = new ApolloServer({ typeDefs, resolvers });

//Test database connection
//P.S Do not commit to gitlab with USERNAME and PASSWORD!
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-jy47h.mongodb.net/plansTest?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//Test graphql queries for  ABSTRACT

const GET_ABSTRACT = gql`
  query getUsersAbstract($userId: String!) {
    getUsersAbstract(userId: $userId) {
      subject
      title
    }
  }
`;

const CREATE_ABSTRACT = gql`
  mutation createAbstract($abstractInput: AbstractInput) {
    createAbstract(abstractInput: $abstractInput) {
      subject
      title
    }
  }
`;

//Test code for ABSTRACT

describe('Abstract resolvers', () => {
  it('should create a abstract', async () => {
    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_ABSTRACT,
      variables: {
        abstractInput: {
          userId: '5ef612a14d99e51764d1782b',
          subject: 'TESTING THE ABSTRACT',
          title: 'ABSTRACT CREATED IN TEST',
          significance: 'significance',
          description: 'description',
          knowledgeGap: 'knowledgeGap',
          researchQuestion: 'researchQuestion',
          hypothesis: 'hypothesis',
          majorTrends: 'majorTrends',
          conclusion: 'conclusion',
          abstract: 'abstract',
        },
      },
    });

    expect(res.data.createAbstract).toEqual({
      subject: 'TESTING THE ABSTRACT',
      title: 'ABSTRACT CREATED IN TEST',
    });
  });

  it('should get abstract', async () => {
    const { query } = createTestClient(server);
    const res = await query({
      query: GET_ABSTRACT,
      variables: {
        userId: '5ef612a14d99e51764d1782b',
      },
    });
    expect(res.data.getUsersAbstract).toEqual([
      {
        subject: 'TESTING THE ABSTRACT',
        title: 'ABSTRACT CREATED IN TEST',
      },
    ]);
    await Abstract.deleteOne({ title: 'ABSTRACT CREATED IN TEST' });
  });
});

//Close mongoDB connection after test
afterAll((done) => {
  mongoose.connection.close();
  done();
});
