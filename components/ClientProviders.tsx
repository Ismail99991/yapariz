"use client";

import { RequestModalProvider } from "@/lib/useRequestModal";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RequestModalProvider>{children}</RequestModalProvider>;
}
