import { enumType } from "nexus";

export const ProgrammingLanguage = enumType({
    name: "ProgrammingLanguage",
    members: [
        "KOTLIN",
        "JAVA",
        "TYPESCRIPT",
        "RUST"
    ]
})