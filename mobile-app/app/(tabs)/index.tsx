import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MenuList from "@/components/ui/MenuList";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Badge } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function HomeScreen() {
  const cartCount = useSelector((state: RootState) => state.menu.totalCart);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/restaurant.jpg")}
          style={styles.image}
          contentFit="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <View style={styles.itemContainer}>
          <View style={styles.leftContent}>
            <ThemedText type="title">Our Menu</ThemedText>
          </View>
          <View style={styles.rightContent}>
            <View style={styles.rightContentChild}>
              <IconSymbol size={28} name="cart.badge.plus" color="#6e3b6e" />
              <Badge style={styles.badge}>{cartCount}</Badge>
            </View>
          </View>
        </View>
      </ThemedView>
      <MenuList />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  itemContainer: {
    flexDirection: "row",
    borderColor: "#000",
    borderRadius: 15,
    padding: 10,
  },
  leftContent: {
    width: "70%",
  },
  rightContent: {
    width: "30%",
    alignItems: "flex-end",
  },
  rightContentChild: {
    position: "relative",
    width: 30,
    height: 30,
  },
  badge: {
    position: "absolute",
    top: -7,
    right: -7,
    zIndex: 1,
  },
});
