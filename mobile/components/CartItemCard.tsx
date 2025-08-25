import { Card } from "@/components/ui/Card"
import { useCart } from "@/contexts/CartContext"
import { styles } from "@/styles/component/CartItemCard"
import type { CartItem } from "@/types/cart"
import type React from "react"
import { Alert, Text, TouchableOpacity, View } from "react-native"

interface CartItemCardProps {
  item: CartItem
}

export const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    } else {
      handleRemove()
    }
  }

  const handleRemove = () => {
    Alert.alert("Remove Item", `Remove ₱{item.name} from your cart?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => removeFromCart(item.id),
      },
    ])
  }

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={styles.itemInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₱{item.price.toFixed(2)} each</Text>
        </View>
        <TouchableOpacity onPress={handleRemove} style={styles.removeButton} activeOpacity={0.7}>
          <Text style={styles.removeButtonText}>×</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>

      <View style={styles.footer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement} activeOpacity={0.7}>
            <Text style={styles.quantityButtonText}>−</Text>
          </TouchableOpacity>

          <View style={styles.quantityDisplay}>
            <Text style={styles.quantityText}>{item.quantity}</Text>
          </View>

          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement} activeOpacity={0.7}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>₱{(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      </View>
    </Card>
  )
}


