import { PrismaClient, Pilote } from '@prisma/client'
import { NextResponse, NextRequest } from 'next/server'

const prisma = new PrismaClient()

export async function GET(
  req: NextRequest
) {
    const pilotes = await prisma.pilote.findMany()
    return NextResponse.json({ pilotes })
}

export async function POST(
  req: NextRequest
) {
    const newPilote = await prisma.pilote.create({
        data: {
            name: "test",
            age: 18
        import { PrismaClient, Pilote } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const pilotes = await prisma.pilote.findMany();
  return NextResponse.json(pilotes);
}

export async function POST(req: NextRequest) {
  const pilote = await prisma.pilote.create({
    data: {
        name: "test",
        age: 18,
        nbCourses: 0,
    }
  });
  return NextResponse.json({ pilote });
}

export async function PUT(req: NextRequest) {
  const pilote = await prisma.pilote.update({
    where: { id: 1 },
    data: {
        name: "toto",
        age: 18,
        nbCourses: 2
    }
  });
  return NextResponse.json({ pilote });
}
    })
    
    return NextResponse.json({ newPilote })
}

// export async function PUT(req: NextRequest) {
//   const updatePilote = await prisma.pilote.update({
//     where: {
//       id: 1,
//     },
//     data: {
//       name: 'jo',
//       age: 24,
//     },
//   });
//   return NextResponse.json({ updatePilote });
// }

