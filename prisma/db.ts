import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";
import { getRequestContext } from "@cloudflare/next-on-pages";

const connectDB = () => {
  const adapter = new PrismaD1(getRequestContext().env.DB);
  return new PrismaClient({ adapter });
};

const prisma = connectDB();

export default prisma;
