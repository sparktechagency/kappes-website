// "use client";

// import { Provider } from "react-redux";
// import { store } from "../../store"; // adjust path if needed
// import Chat from "@/common/components/chatComponent";
// import { useRouter } from "next/navigation";
// export default function Providers({ children }) {
//   const navigation = useRouter();

//   console.log(navigation);
//   return (
//     <Provider store={store}>
//       {children}
//       <Chat />
//     </Provider>
//   );
// }

// "use client";

// import { Provider } from "react-redux";
// import { store } from "../../store";
// import Chat from "@/common/components/chatComponent";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

// export default function Providers({ children }) {
//   const pathname = usePathname();
//   const { isPinned } = useSelector((state) => state.chat);

//   console.log(isPinned);

//   useEffect(() => {
//     console.log("Current path:", pathname);
//   }, [pathname]);

//   return (
//     <Provider store={store}>
//       {children}
//       {pathname.includes("chat") ? null : <Chat />}
//     </Provider>
//   );
// }
"use client";

import { Provider, useSelector } from "react-redux";
import { store } from "../../store";
import Chat from "@/common/components/chatComponent";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
      <ChatWrapper>{children}</ChatWrapper>
    </Provider>
  );
}
