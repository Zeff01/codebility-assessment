import { IconGauge } from "@tabler/icons-react";
import type { NavLinkProps } from "@mantine/core";
import type { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface INavigation extends NavLinkProps {
  leftIcon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  rightIcon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  to: string;
}

const navigation: INavigation[] = [
  {
    leftIcon: IconGauge,
    label: "Dashboard",
    to: "/",
    description: "Item with description",
  },
];

export default navigation;
