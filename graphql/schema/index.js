const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  type User {
    _id: ID!
    mobile: String!
    password: String!
  }

  type Abstract {
    _id: ID!
    userId: String!
    subject: String!
    title: String!
    significance: String!
    description: String!
    knowledgeGap: String!
    researchQuestion: String!
    hypothesis: String!
    majorTrends: String!
    conclusion: String!
    abstract: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input UserInput {
    mobile: String!
    password: String!
  }

  input SendCodeInput {
    pageType: String!
    mobile: String!
  }

  input AbstractInput {
    userId: String!
    subject: String!
    title: String!
    significance: String!
    description: String!
    knowledgeGap: String!
    researchQuestion: String!
    hypothesis: String!
    majorTrends: String!
    conclusion: String!
    abstract: String!
  }

  input EditAbstractInput {
    _id: ID!
    title: String!
    significance: String!
    description: String!
    knowledgeGap: String!
    researchQuestion: String!
    hypothesis: String!
    majorTrends: String!
    conclusion: String!
    abstract: String!
  }

  type Query {
    sendCode(sendCodeInput: SendCodeInput): Boolean!
    getUsersParticularAbstract(abstractId: String!): Abstract!
    getUsersAbstract(userId: String!): [Abstract!]!
  }

  type Mutation {
    createUser(userInput: UserInput): Users
    createAbstract(abstractInput: AbstractInput): Abstract
    editAbstract(editAbstractInput: EditAbstractInput): Abstract
    deleteAbstract(abstractId: String!): Abstract
  }
`;

module.exports = typeDefs;
