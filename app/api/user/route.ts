import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { name, email } = (await req.json()) satisfies {
    name: string;
    email: string;
  };

  const user = await prisma.user.create({ data: { email, name } });
  return NextResponse.json(user);
};

export const GET = async () => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};
