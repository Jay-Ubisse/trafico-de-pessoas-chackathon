import prisma from "@/lib/db";
import { complaintSchema } from "@/schemas/complaints";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { action, ageGroup, gender, location, means, purpose, name, number } =
      complaintSchema.parse(body);

    if (!action || !ageGroup || !gender || !location || !means || !purpose) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios" },
        { status: 400 }
      );
    }

    const complaints = await prisma.complaints.create({
      data: {
        action,
        ageGroup,
        gender,
        number,
        location,
        means,
        purpose,
        name,
      },
    });

    return NextResponse.json(
      { message: "Denúncia recebida com sucesso", complaints },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Ocorreu um erro no servidor!", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const complaints = await prisma.complaints.findMany();

    return NextResponse.json({ message: "ok", complaints }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao buscar as denúncias" },
      { status: 500 }
    );
  }
}
