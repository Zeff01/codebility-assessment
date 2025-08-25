
import { CartItemCard } from "@/components/CartItemCard"
import { Card } from "@/components/ui/Card"
import { useCart } from "@/contexts/CartContext"
import { styles } from "@/styles/cartStyles"
import { router } from "expo-router"
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native"

export default function CartScreen() {
  const { cart, clearCart } = useCart()

  const handleCheckout = () => {
    if (cart.items.length === 0) {
      Alert.alert("Empty Cart", "Please add items to your cart before checking out.")
      return
    }

    Alert.alert(
      "Checkout",
      `Total: $${cart.totalPrice.toFixed(2)}\n\nThis is a demo app. In a real app, this would proceed to payment.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Place Order",
          style: "default",
          onPress: () => {
            clearCart()
            Alert.alert("Order Placed!", "Thank you for your order. It will be delivered soon!", [
              {
                text: "OK",
                onPress: () => router.back(),
              },
            ])
          },
        },
      ],
    )
  }

  const handleClearCart = () => {
    Alert.alert("Clear Cart", "Are you sure you want to remove all items from your cart?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Clear",
        style: "destructive",
        onPress: clearCart,
      },
    ])
  }

  if (cart.items.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptySubtitle}>Add some delicious items from our menu!</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.8}>
            <Text style={styles.backButtonText}>Browse Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Order</Text>
          <TouchableOpacity onPress={handleClearCart} activeOpacity={0.7}>
            <Text style={styles.clearButton}>Clear All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemsContainer}>
          {cart.items.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </View>

        <Card style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Order Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Items ({cart.totalItems})</Text>
            <Text style={styles.summaryValue}>${cart.totalPrice.toFixed(2)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>₱2.99</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryValue}>₱{(cart.totalPrice * 0.08).toFixed(2)}</Text>
          </View>

          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₱{(cart.totalPrice + 2.99 + cart.totalPrice * 0.08).toFixed(2)}</Text>
          </View>
        </Card>
      </ScrollView>

      <View style={styles.checkoutContainer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout} activeOpacity={0.8}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          <Text style={styles.checkoutButtonSubtext}>
            ₱{(cart.totalPrice + 2.99 + cart.totalPrice * 0.08).toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

