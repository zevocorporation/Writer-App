const { GraphQLScalarType } = require('graphql');

const resolvers = {
  Query: {},

  Mutation: {},

  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Custom date scalar',
    serialize(value) {
      return value.toDateString();
    },
  }),
};

module.exports = resolvers;
