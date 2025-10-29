"use client";

import { Bounce, toast, ToastContainer } from "react-toastify";
import { FinancialWidgets, WeatherWidgets } from "./components";
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { setToastMessage } from "@/store/slices/toast/toastSlice";
import { Notification } from "./components/shared";

export default function Home() {
  const dispatch = useAppDispatch();
  const { type, toastMessage } = useAppSelector((state) => state.toast);

  useEffect(() => {
    if (toastMessage) {
      toast(<Notification type={type}>{toastMessage}</Notification>);
      dispatch(setToastMessage(""));
    }
  }, [toastMessage]);

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full grid grid-cols-1 xl:grid-cols-[450px_1fr] lg:grid-cols-[350px_1fr] gap-4">
        <div>
          <WeatherWidgets />
        </div>
        <div>
          <FinancialWidgets />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}
