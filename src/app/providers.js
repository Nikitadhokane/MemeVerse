"use client";
import { Provider } from "react-redux";
import store from "@/redux/store"; // Adjusted import

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
