import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { Gender,Age,Region,Purpose,Quite, Acction,Location } = body

    
    if (!Gender|| !Age || !Region || !Purpose ||  !Acction || !Location) {
      return NextResponse.json(
        { error: "Todos os campos são de preenchimento obrigatório." },
        { status: 400 }
      )
    }

    
    const complaints = await prisma.complaints.create({
      data: {
        Gender,
        Age,
        Region,
        Purpose,
        Acction,
        Location,

      },
    })

    return NextResponse.json(complaints, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Ocorreu um erro no servidor, por favor tente novamente!" },
      { status: 500 }
    )
  }
}






export async function GET() {
  try {
    const complaints = await prisma.complaints.findMany({
      orderBy: { createdAt: 'desc' }, 
    });

    return NextResponse.json(complaints, { status: 200 });
  } catch (error) {
   
    return NextResponse.json(
      { message: "Erro ao buscar  as denúncias" },
      { status: 500 }
    );
  }
}


