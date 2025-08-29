import {
  Timeline,
  Text,
  LoadingOverlay,
  Box,
  Card,
  Group,
} from "@mantine/core";
import {
  IconLocation,
  IconMessageDots,
  IconThermometer,
  IconStatusChange,
} from "@tabler/icons-react";
import useWeather from "@/hooks/use-weather";

export function WeatherWidget() {
  const { weather, loading } = useWeather({ q: "London" });

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>OpenWeatherMap Integration</Text>
        </Group>
      </Card.Section>
      <Card.Section mt="sm" p="md">
        <Box pos="relative">
          <LoadingOverlay
            visible={loading}
            loaderProps={{ children: "Fetching weather data..." }}
          />
          <Timeline bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconLocation size={12} />}
              title={weather?.name}
            >
              <Text c="dimmed" size="sm">
                Longitude:
                <Text variant="link" component="span" inherit>
                  {weather?.coord.lon}
                </Text>{" "}
              </Text>
              <Text c="dimmed" size="sm">
                Latitude:
                <Text variant="link" component="span" inherit>
                  {weather?.coord.lat}
                </Text>{" "}
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconThermometer size={12} />}
              title="Temperature"
            >
              <Text c="dimmed" size="sm">
                {weather?.main.temp} °C
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Condition"
              bullet={<IconStatusChange size={12} />}
              lineVariant="dashed"
            >
              <Text c="dimmed" size="sm">
                {weather && weather.weather.length > 0
                  ? weather?.weather[0].description
                  : ""}
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Humidity"
              bullet={<IconMessageDots size={12} />}
            >
              <Text c="dimmed" size="sm">
                <Text variant="link" component="span" inherit>
                  {weather?.main.humidity}%
                </Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Box>
      </Card.Section>
    </Card>
  );
}
