import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema.js";
import resolvers from "./resolvers.js";

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: parseInt(process.env.PORT ?? "3001")
    }
});

console.log(`Server ready at ${url}`);