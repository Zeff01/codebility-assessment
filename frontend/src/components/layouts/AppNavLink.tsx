import { NavLink, Text } from "@mantine/core";
import type { NavLinkProps } from "@mantine/core";
import { IconGauge } from "@tabler/icons-react";

interface IAppNavLink extends NavLinkProps {
  to: string;
}

export function AppNavLink(props: IAppNavLink) {
  return (
    <NavLink
      {...props}
      leftSection={<IconGauge size={16} stroke={1.5} />}
      label={<Text>{props.label}</Text>}
      href={props.to}
    />
  );
}
