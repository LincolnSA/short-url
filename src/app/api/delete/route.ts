import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function DELETE(request: NextRequest) {
  const { url } = await request.json();

  await redis.del(url);

  return NextResponse.json({ message: "URL deletada com sucesso" }, { status: 200 });
}
