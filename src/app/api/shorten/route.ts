import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { redis } from "@/lib/redis";
import { generateShortUrl } from "@/lib/utils";

const schema = z.object({
  url: z.string().url(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { url } = schema.parse(body);
  const shortUrl = generateShortUrl();

  await redis.set(shortUrl, url);

  return NextResponse.json({ message: "URL encurtada com sucesso" }, { status: 200 });
}