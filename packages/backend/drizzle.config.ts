import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  dialect: "postgresql",
  schema: "./src/db/schema",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
