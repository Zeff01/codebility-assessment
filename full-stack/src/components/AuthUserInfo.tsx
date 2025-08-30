import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import { Avatar, Group, Text } from "@mantine/core";
import classes from "./AuthUserInfo.module.css";

export function AuthUserInfo() {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={60}
          radius="md"
        />
        <div>
          <Text fz={8} tt="uppercase" fw={700} c="dimmed">
            Software engineer
          </Text>

          <Text fz={12} tt="uppercase" fw={500} className={classes.name}>
            Frankly Dexisne Jr
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={10} className={classes.icon} />
            <Text fz={10} c="dimmed">
              frankdexisne1692@gmail.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={10} className={classes.icon} />
            <Text fz={10} c="dimmed">
              +63 (991) 756 8153
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
