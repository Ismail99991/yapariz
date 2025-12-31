"use client";

import { createContext, useContext, useState } from "react";

const RequestModalContext = createContext<any>(null);

export function RequestModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <RequestModalContext.Provider value={{ open, setOpen }}>
      {children}
    </RequestModalContext.Provider>
  );
}

export const useRequestModal = () => useContext(RequestModalContext);
