import { CartProvider } from "@/contexts/CartContext"
import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <CartProvider>
      {/* <StatusBar style="light" backgroundColor="#8B5CF6" /> */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8B5CF6",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "600",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Purple Bistro",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: "Your Cart",
            presentation: "modal",
            headerShown: true,
          }}
        />
      </Stack>
    </CartProvider>
  )
}
