import { ApolloServer, gql } from "apollo-server";

// Schema (typeDefs)
const typeDefs = gql`
    type Query {
        hello: String ,
        say: String
    }
`;

// Resolvers
const resolvers = {
    Query: {
        hello: () => "Hello, GraphQL!",
        say: () => "hello"
    },
};

// Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
