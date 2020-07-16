const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime
`;

module.exports = typeDefs;
