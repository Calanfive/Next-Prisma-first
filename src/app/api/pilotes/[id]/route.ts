import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, context: { params: {id: string} }) {
  const pilotes = await prisma.pilote.findUnique({
    where: { id: parseInt(context.params.id) },
  });
  return NextResponse.json(pilotes);
}