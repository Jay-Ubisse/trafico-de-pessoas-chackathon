import prisma from "@/lib/db";
import { MessageProps } from "@/types/messages";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const messages = await prisma.sentMessages.findMany();

    return NextResponse.json({ meessage: "ok", messages }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}

/*Cadastrar vários campos */

export async function POST(req: Request) {
  try {
    const body: MessageProps[] = await req.json();

    await prisma.sentMessages.createMany({
      data: body,
    });

    return NextResponse.json(
      {
        message: "Mensagens enviadas com sucesso",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Erro interno no servidor", error },
      { status: 500 }
    );
  }
}

/*

Cadastrar um campo


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, number, message } = sentMessagesSchema.parse(body);

    const sentMessage = await prisma.sentMessages.create({
      data: {
        name,
        number,
        message,
      },
    });

    return NextResponse.json(
      {
        message: "Mensagem enviada com sucesso",
        sentMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Erro interno no servidor", error },
      { status: 500 }
    );
  }
}

*/
