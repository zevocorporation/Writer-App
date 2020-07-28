const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  enum Type {
    SIGN_UP
    RESET_PASSWORD
  }

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

  type userData {
    _id: ID!
    mobile: String!
    token: String!
    tokenExpiration: Int!
  }

  input LoginInput {
    mobile: String!
    password: String!
  }

  input SignUpInput {
    code: String!
    password: String!
  }

  input ResetPasswordInput {
    code: String!
    newPassword: String!
  }

  input SendCodeInput {
    type: Type!
    mobile: String!
  }

  input AbstractInput {
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

  input UpdateAbstractInput {
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
    getUserAbstractDocument(abstractId: ID!): Abstract!
    getUserAbstracts: [Abstract!]!
  }

  type Mutation {
    sendCode(sendCodeInput: SendCodeInput): Boolean
    verifyCode(code: String!): Boolean
    login(loginInput: LoginInput): userData
    signUp(signUpInput: SignUpInput): User
    resetPassword(resetPasswordInput: ResetPasswordInput): User
    createAbstract(abstractInput: AbstractInput): Abstract
    updateAbstract(updateAbstractInput: UpdateAbstractInput): Abstract
    deleteAbstract(abstractId: ID!): Abstract
  }
`;

module.exports = typeDefs;
