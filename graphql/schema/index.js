const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  type User {
    _id: ID!
    mobile: String!
    password: String!
    createdAt: DateTime!
    updatedAt: DateTime!
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

  type AuthData {
    _id: ID!

    mobile: String!
    token: String!
    tokenExpiration: Int!
  }

  input UserInput {
    pageType: String!
    mobile: String!
    otp: String!
    password: String!
    confirmPassword: String!
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
    login(mobile: String!, password: String!): AuthData!

    sendCode(sendCodeInput: SendCodeInput): Boolean!
    getUsersParticularAbstract(abstractId: String!): Abstract!
    getUsersAbstract(userId: String!): [Abstract!]!
  }

  type Mutation {
    signUpAndResetPassword(userInput: UserInput): User
    createAbstract(abstractInput: AbstractInput): Abstract
    editAbstract(editAbstractInput: EditAbstractInput): Abstract
    deleteAbstract(abstractId: String!): Abstract
  }
`;

module.exports = typeDefs;
