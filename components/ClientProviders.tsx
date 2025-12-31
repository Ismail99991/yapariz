"use client";

import i18n from "@/lib/i18n";
import { RequestModalProvider } from "@/lib/useRequestModal";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RequestModalProvider>{children}</RequestModalProvider>;
}
