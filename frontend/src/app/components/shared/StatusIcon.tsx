import {
  HiCheckCircle,
  HiInformationCircle,
  HiExclamation,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import type { ReactNode } from "react";
import { CommonProps, TypeAttributes } from "@/app/@types/common";

export interface StatusIconProps extends CommonProps {
  type: TypeAttributes.Status;
  custom?: ReactNode;
  iconColor?: string;
}

const ICONS: Record<
  TypeAttributes.Status,
  {
    color: string;
    icon: ReactNode;
  }
> = {
  success: {
    color: "text-emerald-400",
    icon: <HiCheckCircle />,
  },
  info: {
    color: "text-blue-400",
    icon: <HiInformationCircle />,
  },
  warning: {
    color: "text-yellow-400",
    icon: <HiExclamation />,
  },
  danger: {
    color: "text-red-400",
    icon: <HiOutlineExclamationCircle />,
  },
};

const StatusIcon = (props: StatusIconProps) => {
  const { type = "info", custom, iconColor } = props;

  const icon = ICONS[type];

  return (
    <span className={`text-xl ${iconColor || icon.color}`}>
      {custom || icon.icon}
    </span>
  );
};

export default StatusIcon;
