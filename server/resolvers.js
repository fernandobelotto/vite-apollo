const users = {
  1: {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    image: 'https://avatars.githubusercontent.com/u/38187170?v=4'
  },
  2: {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/43.jpg'
  }
}

const resolvers = {
    Query: {
      users: async (_, __, { dataSources }) => {
        return Object.values(users);
      },
      user: async (_, { id }, { dataSources }) => {
        return users[id];
      }
    },
    Mutation: {
      addUser: async (_, { name, email }, { dataSources }) => {
        const id = Object.keys(users).length + 1;
        const user = { id, name, email };
        users[id] = user;
        return user;
      },
      deleteUsers: async (_, { id }, { dataSources }) => {
        delete users[id];
        return true;
      }
    }
  };
  
  module.exports = resolvers;