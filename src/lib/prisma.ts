import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaBetterSqlite3(
  { url: process.env.DATABASE_URL! },
  // Existing rows store DateTime as Unix epoch milliseconds (Prisma <= 6 default),
  // and the raw query in /summary relies on that format.
  { timestampFormat: "unixepoch-ms" },
);

export const prisma = new PrismaClient({ adapter });
