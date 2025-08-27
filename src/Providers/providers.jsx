"use client";

import { Provider, useSelector } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import Chat from "@/common/components/chatComponent";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Toaster } from "sonner";

// Wrapper to access Redux + pathname within Provider
function ChatWrapper({ children }) {
  const pathname = usePathname();
  const { isChatOpen, isPinned } = useSelector((state) => state.chat);

  useEffect(() => {
    console.log("Current path:", pathname);
  }, [pathname]);

  const shouldShowChat = !pathname.includes("chat") && (isChatOpen || isPinned);

  return (
    <>
      {children}
      {shouldShowChat && <Chat />}
    </>
  );
}

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster richColors />
        <ChatWrapper>{children}</ChatWrapper>
      </PersistGate>
    </Provider>
  );
}
