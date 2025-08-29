import { Text, Title, Box, Paper, LoadingOverlay } from "@mantine/core";
import type { StyleProp, DefaultMantineColor } from "@mantine/core";

import useQoute from "@/hooks/use-qoute";
interface ICardWidget {
  bg: StyleProp<DefaultMantineColor>;
  symbol: string;
}

function CardWidget({ bg, symbol }: ICardWidget) {
  const { loading, stockData } = useQoute({ symbol });

  return (
    <Box pos="relative">
      <Paper shadow="xs" p="xl" bg={bg}>
        <LoadingOverlay
          visible={loading}
          loaderProps={{ children: "Fetching financial data..." }}
        />
        <Title order={4} c="white">
          {symbol}
        </Title>
        <Text>
          Current Price: <span className="font-bold">${stockData.c}</span>
        </Text>
        <p>
          High Price: <span className="font-bold">${stockData.h}</span>
        </p>
        <p>
          Low Price: <span className="font-bold">${stockData.l}</span>
        </p>
        <p>
          Open Price: <span className="font-bold">${stockData.o}</span>
        </p>
        <p>
          Previous Close: <span className="font-bold">${stockData.pc}</span>
        </p>
      </Paper>
    </Box>
  );
}

export default CardWidget;
