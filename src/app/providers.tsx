"use client"

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { Toaster } from "@/components/ui/sonner";

interface Props {
  children: React.ReactNode;
}

export function Providers(props: Props) {
  const { children } = props;
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster
          position="top-right"
          duration={2000}
        />
      </QueryClientProvider>
    </>
  );
}