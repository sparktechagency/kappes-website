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

"use client";

import { Provider } from "react-redux";
import { store } from "../../store";
import Chat from "@/common/components/chatComponent";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Providers({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current path:", pathname);
  }, [pathname]);

  return (
    <Provider store={store}>
      {children}
      {pathname.includes("chat") ? null : <Chat />}
    </Provider>
  );
}
