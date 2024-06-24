import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    include: { posts: true },
  });
  return NextResponse.json(user);
};
