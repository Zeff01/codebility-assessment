
import { CartButton } from "@/components/CartButton"
import { MenuList } from "@/components/MenuList"
import { RestaurantHeader } from "@/components/RestaurantHeader"
import { restaurantData } from "@/data/mockData"
import { styles } from "@/styles/homeStyle"
import { SafeAreaView, View } from "react-native"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="light" backgroundColor={theme.colors.primary} /> */}

      <View style={styles.content}>
        <RestaurantHeader restaurant={restaurantData} />
        <MenuList />
        <CartButton />
      </View>
    </SafeAreaView>
  )
}

