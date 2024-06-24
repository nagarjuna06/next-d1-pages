import prisma from "@/prisma/db";
import { Post } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const POST = async (req: NextRequest) => {
  const { title, description, authorId } = (await req.json()) satisfies Post;
  const post = await prisma.post.create({
    data: { title, description, authorId },
  });
  return NextResponse.json(post);
};

export const GET = async () => {
  const posts = await prisma.post.findMany({ include: { author: true } });
  return NextResponse.json(posts);
};
