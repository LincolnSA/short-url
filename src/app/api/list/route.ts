import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  const keys = await redis.keys("*");

  const urls = await Promise.all(
    keys.map(async (key) => {
      const url = await redis.get(key);

      return {
        id: key,
        url: url,
        shortUrl: process.env.NEXT_PUBLIC_API_URL + "/r/" + key,
      };
    })
  );

  return NextResponse.json({ message: "URL", data: urls }, { status: 200 });
}
