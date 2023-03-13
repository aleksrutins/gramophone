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
        users: [User]
        tutorials: [Tutorial]
        user(name: String!): User
        tutorialsBy(username: String!): [Tutorial]
        tutorial(id: Int!): Tutorial
    }

    type Mutation {
        createUser(accessToken: String): User
        createTutorial(title: String!, language: ProgrammingLanguage!): Tutorial
        addSection(tutorialId: Int!, text: String!, code: String!): Section
        removeSection(id: Int!): Section
    }
`