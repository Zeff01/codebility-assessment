import { Grid, Text } from "@mantine/core";
import CardWidget from "./CardWidget";

export function FinancialWidget() {
  const mockData = [
    {
      bg: "blue",
      symbol: "MSFT",
    },
    {
      bg: "green",
      symbol: "SPY",
    },
    {
      bg: "red",
      symbol: "DJI",
    },
    {
      bg: "grape",
      symbol: "GOOGL",
    },
  ];

  return (
    <>
      <Text size="xl" fw={700}>
        Finnhub Integration (Quotation)
      </Text>
      <Grid>
        {mockData.map((mock, index) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} p={15} key={index}>
            <CardWidget bg={mock.bg} symbol={mock.symbol} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
