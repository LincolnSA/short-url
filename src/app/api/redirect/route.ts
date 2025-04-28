import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET(request: NextRequest) {
  const shortenUrl = request.nextUrl.searchParams.get("url");

  if (!shortenUrl) {
    return NextResponse.json({ message: "URL não encontrada" }, { status: 404 });
  }

  const url = await redis.get(shortenUrl);

  return NextResponse.json({ message: "URL redirecionada com sucesso", url }, { status: 200 });
}
