import { goalSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  params: { params: { id: string } }
) {
  const goal = await prisma.gOAL.findUnique({
    where: { id: parseInt(params.params.id) },
  });

  if (!goal)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  const udpatedGoal = await prisma.gOAL.update({
    where: { id: goal.id },
    data: {
      title: goal.title,
      description: goal.description,
      status: "COMPLETE",
    },
  });

  return NextResponse.json(udpatedGoal);
}