import { NuxtConfig } from "nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/apollo"],

    apollo: {
        clients: {
            default: {
                httpEndpoint: process.env.RAILWAY_ENVIRONMENT == "production" ? "https://gramophone-server-production.up.railway.app" : "localhost:3001"
            }
        }
    }
} as NuxtConfig)
