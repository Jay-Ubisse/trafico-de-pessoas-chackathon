import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { VulnerablePeopleProps } from "@/types/vulnerablePeople";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const vulnerable = await prisma.vulnerablePeople.findMany();
    return NextResponse.json({ message: "ok", vulnerable }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body: VulnerablePeopleProps = await req.json();

    const vulnerablePerson = await prisma.vulnerablePeople.create({
      data: {
        number: body.number,
        name: body.name,
        message: body.message,
        ageGroup: body.ageGroup,
        vulnerable: body.vulnerable,
        gender: body.gender,
        location: body.location,
        vulnerabilityLevel: body.vulnerabilityLevel,
      },
    });

    return NextResponse.json(
      {
        message: "Pessoa vulnerável cadastrada com sucesso",
        vulnerablePerson,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
