import { forwardRef } from "react";
import { CommonProps, TypeAttributes } from "@/app/@types/common";
import StatusIcon from "./StatusIcon";

export interface NotificationProps extends CommonProps {
  type?: TypeAttributes.Status;
}

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const { children, type = "info" } = props;

    return (
      <div ref={ref} className="flex gap-2 items-center">
        {type && <StatusIcon type={type} />}
        <div className="w-full text-[#171821]">{children}</div>
      </div>
    );
  }
);

Notification.displayName = "Notification";

export default Notification;
