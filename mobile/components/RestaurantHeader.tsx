import type { Restaurant } from "@/data/mockData"
import { styles } from "@/styles/component/RestaurantHeader"
import type React from "react"
import { Image, Text, View } from "react-native"

interface RestaurantHeaderProps {
  restaurant: Restaurant
}

export const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>⭐ {restaurant.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statValue}>{restaurant.deliveryTime}</Text>
            <Text style={styles.statLabel}>Delivery</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statValue}>₱{restaurant.deliveryFee}</Text>
            <Text style={styles.statLabel}>Fee</Text>
          </View>
        </View>

        <Text style={styles.description}>{restaurant.description}</Text>

        <View style={styles.contactInfo}>
          <Text style={styles.address}>{restaurant.address}</Text>
          <Text style={styles.phone}>{restaurant.phone}</Text>
        </View>
      </View>
    </View>
  )
}

