import { Avatar, Group, Text } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import classes from "./UserInfo.module.css";

export function UserInfo() {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={60}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={300} c="dimmed">
            Software engineer
          </Text>

          <Text fz="sm" fw={500} className={classes.name}>
            FRANKLY D. DEXISNE JR
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              frankdexisne1692@gmail.com
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
