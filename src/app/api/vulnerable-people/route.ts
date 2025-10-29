import { NextResponse } from "next/server";

import { VulnerablePeopleProps } from "@/types/vulnerable-people";
import prisma from "@/lib/db";
import { vulnerablePeopleSchema } from "@/schemas/vulnerables";

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
    const body = await req.json();

    const {
      ageGroup,
      name,
      number,
      childTraffickingScore,
      domesticServitudeScore,
      drugsCoercionScore,
      sexualExploitationScore,
      gender,
      location,
      forcedLaborScore,
      fraudDeceptionScore,
      organTraffickingScore,
      totalVulnerabilityScore,
      vulnerabilityLevel,
      vulnerabilityType,
    } = vulnerablePeopleSchema.parse(body);

    const vulnerablePerson = await prisma.vulnerablePeople.create({
      data: {
        ageGroup,
        name,
        number,
        childTraffickingScore,
        domesticServitudeScore,
        drugsCoercionScore,
        sexualExploitationScore,
        gender,
        location,
        forcedLaborScore,
        fraudDeceptionScore,
        organTraffickingScore,
        totalVulnerabilityScore,
        vulnerabilityLevel,
        vulnerabilityType,
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
