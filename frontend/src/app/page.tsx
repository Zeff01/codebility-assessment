"use client";

import { AppLayout } from "@/components/layouts/AppLayout";
import { FinancialWidget } from "@/components/widgets/FinancialWidget";
import { Grid, Space } from "@mantine/core";
import { WeatherWidget } from "@/components/widgets/WeatherWidget";
import { ActiveUsers } from "@/components/widgets/ActiveUsers";

export default function Home() {
  return (
    <AppLayout>
      <FinancialWidget />
      <Space mt={10} />
      <Grid>
        <Grid.Col span={{ base: 12, md: 12, lg: 3, sm: 12 }}>
          <WeatherWidget />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 12, lg: 9, sm: 12 }}>
          <ActiveUsers />
        </Grid.Col>
      </Grid>
    </AppLayout>
  );
}
