"use client";

import { Provider } from "react-redux";
import { store } from "../../store"; // adjust path if needed

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
