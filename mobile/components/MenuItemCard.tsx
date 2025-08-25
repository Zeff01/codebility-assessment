import { useCart } from "@/contexts/CartContext"
import type { MenuItem } from "@/data/mockData"
import { styles } from "@/styles/component/MenuItemCard"
import type React from "react"
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { Badge } from "./ui/Badge"
import { Card } from "./ui/Card"
interface MenuItemCardProps {
  item: MenuItem
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart, getItemQuantity } = useCart()
  const quantity = getItemQuantity(item.id)

  const handleAddToCart = () => {
    addToCart(item)
    Alert.alert("Added to Cart", `${item.name} has been added to your cart!`, [{ text: "OK", style: "default" }])
  }

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{item.name}</Text>
          {item.isPopular && <Badge variant="success">Popular</Badge>}
        </View>
        <Text style={styles.price}>₱{item.price.toFixed(2)}</Text>
      </View>

      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.footer}>
        <View style={styles.categoryContainer}>
          <Badge variant="secondary">{item.category}</Badge>
        </View>

        <View style={styles.actionContainer}>
          {quantity > 0 && (
            <View style={styles.quantityBadge}>
              <Text style={styles.quantityText}>{quantity}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart} activeOpacity={0.8}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  )
}

