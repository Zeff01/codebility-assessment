import { useDisclosure } from "@mantine/hooks";
import { AppShell, Group, Burger } from "@mantine/core";
import { PropsWithChildren } from "react";
import { AppNavbar } from "./AppNavbar";

export function AppLayout({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          FRONTEND EXAM - CODEBILITY
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppNavbar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
