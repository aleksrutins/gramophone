import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema.js";

const resolvers = {
    Query: {
        
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: parseInt(process.env.PORT ?? "3001")
    }
});

console.log(`Server ready at ${url}`);