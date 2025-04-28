import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center">Welcome to <br /> URL Shortener</h1>
      <Button asChild className="cursor-pointer">
        <Link href="/dashboard">Go to dashboard</Link>
      </Button>
    </main>
  );
}
