const { GraphQLScalarType } = require('graphql');

const abstract = require('./abstract');
const user = require('./user');

const resolvers = {
  Query: {
    ...abstract.queryResolver,
  },

  Mutation: {
    ...abstract.mutationResolver,
    ...user.mutationResolver,
  },

  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Custom date scalar',
    serialize(value) {
      return (
        value.toLocaleString([], {
          dateStyle: 'medium',
          timeStyle: 'short',
        }) + ' IST'
      );
    },
  }),
};

module.exports = resolvers;
