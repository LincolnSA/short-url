"use client";

import { useEffect } from "react";
import { Loading } from "@/components/ui/loading";
import { useUrl } from "@/hooks/useUrl";

export default function RedirectPage() {
  const { redirectUrl } = useUrl();

  useEffect(() => {
    if (redirectUrl.data?.url) {
      window.location.href = redirectUrl.data.url;
    }
  }, [redirectUrl.data]);

  if (redirectUrl.isPending) {
    return <Loading />;
  }

  if (redirectUrl.isError || !redirectUrl.data?.url) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">URL não encontrada</h1>
        <p>A URL que você está procurando não existe ou foi removida.</p>
      </div>
    );
  }

  return <Loading />;
} 