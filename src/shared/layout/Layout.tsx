"use client";

import type React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Theme } from "@radix-ui/themes";

interface LayoutProps {
  children: React.ReactNode;
}

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const queryClient = new QueryClient({
    // выпил потом
    defaultOptions: {
      queries: {
        staleTime: Number.POSITIVE_INFINITY,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Theme appearance="light">
        <main className="p-4 md:p-8">{children}</main>
      </Theme>
    </QueryClientProvider>
  );
};
