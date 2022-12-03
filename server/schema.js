const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: Int!): User
  }

  type Mutation {
    addUser(
      name: String!
      email: String!
    ): User

    deleteUsers(
      id: Int!
    ): User
  }

  type User {
    id: Int!
    name: String!
    email: String!
    image: String!
  }
`;

module.exports = typeDefs;
