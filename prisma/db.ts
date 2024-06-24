import { PrismaD1 } from "@prisma/adapter-d1";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { PrismaClient } from "@prisma/client";
const adapter = new PrismaD1(getRequestContext().env.DB);

const prisma = new PrismaClient({ adapter });

export default prisma;
