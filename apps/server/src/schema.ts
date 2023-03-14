import { join } from "node:path"
import { makeSchema } from "nexus"
import * as types from "./graphql/index.js"

export default `#graphql
    "The programming language of a tutorial."
    enum ProgrammingLanguage {
        KOTLIN
        JAVA
        TYPESCRIPT
        RUST
    }

    "A user."
    type User {
        username: String!
        name: String
        email: String
        avatar: String!

        "The user's GitHub token. This will only be non-null for the logged-in user."
        accessToken: String

        "The tutorials a user has created."
        tutorials: [Tutorial]
    }


    type Section {
        id: Int!
        text: String!
        code: String!
        inTutorial: Tutorial
    }

    type Tutorial {
        id: Int!
        title: String!
        language: ProgrammingLanguage!
        createdBy: User!
        sections: [Section]
    }

    type Query {
        "Get all users."
        users: [User]
        "Get all tutorials."
        tutorials: [Tutorial]
        "Get the current user."
        me: User
        "Get a user by their username."
        user(username: String!): User
        "Get all tutorials by a specific user."
        tutorialsBy(username: String!): [Tutorial]
        "Get a specific tutorial by ID."
        tutorial(id: Int!): Tutorial
    }

    type Mutation {
        "Create a user, passing in a GitHub access token."
        createUser(accessToken: String): User
        "Create a tutorial for the current user."
        createTutorial(title: String!, language: ProgrammingLanguage!): Tutorial
        "Add a section to the specified tutorial."
        addSection(tutorialId: Int!, text: String!, code: String!): Section
        "Remove a section from its tutorial."
        removeSection(id: Int!): Section
    }
`

export const schema = makeSchema({
    types,
    outputs: {
        typegen: join(new URL(import.meta.url).pathname, '..', 'nexus-typegen.ts'),
        schema: join(new URL(import.meta.url).pathname, '..', 'schema.graphql')
    }
})