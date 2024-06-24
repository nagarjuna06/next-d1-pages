import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";
import { getRequestContext } from "@cloudflare/next-on-pages";

const prisma = () => {
  const adapter = new PrismaD1(getRequestContext().env.DB);
  return new PrismaClient({ adapter });
};

export default prisma;
