import { objectType } from "nexus";

export const Section = objectType({
    name: 'Section',
    definition(t) {
        t.int('id')
        t.string('text')
        t.string('code')
    },
})