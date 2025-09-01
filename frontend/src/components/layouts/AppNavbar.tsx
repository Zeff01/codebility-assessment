import navigation from "@/navigation";
import { AppNavLink } from "./AppNavLink";
import { Box, Divider } from "@mantine/core";
import { UserInfo } from "./UserInfo";

export function AppNavbar() {
  return (
    <div style={{ height: "100vh", flex: 1 }}>
      <Box style={{ height: "90%" }}>
        {navigation.map(({ label, to }, index) => (
          <AppNavLink label={label} to={to} key={index} />
        ))}
      </Box>
      <Divider mb={15} />
      <Box className="mt-auto flex items-end">
        <UserInfo />
      </Box>
    </div>
  );
}
