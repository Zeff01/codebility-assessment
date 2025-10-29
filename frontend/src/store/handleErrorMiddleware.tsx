import { Notification } from "@/app/components/shared";
import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const handleErrorMiddleware: Middleware =
  () => (next) => (action: any) => {
    if (
      isRejectedWithValue(action) ||
      action?.payload?.cod === "500" ||
      action?.payload?.cod === "404"
    ) {
      toast(
        <Notification type="danger">
          {action?.payload?.cod && `Error code: ${action?.payload?.cod}`}
        </Notification>
      );
    }

    return next(action);
  };
