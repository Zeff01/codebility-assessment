import { useCart } from "@/contexts/CartContext"
import { styles } from "@/styles/component/CartButtonStyle"
import { router } from "expo-router"
import type React from "react"
import { Text, TouchableOpacity, View } from "react-native"

export const CartButton: React.FC = () => {
  const { cart } = useCart()

  const handlePress = () => {
    router.push("/cart")
  }

  if (cart.totalItems === 0) {
    return null
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cart.totalItems}</Text>
        </View>
        <Text style={styles.text}>View Cart</Text>
        <Text style={styles.price}>₱{cart.totalPrice.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  )
}


