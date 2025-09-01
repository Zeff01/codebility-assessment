import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";
import AppRating from "@/components/ui/AppRating";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";

export default function TabTwoScreen() {
  const [rating, setRating] = useState(0);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/restaurant.jpg")}
          style={styles.image}
          contentFit="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Frank Pizza House</ThemedText>
      </ThemedView>
      <ThemedText style={styles.justifyText}>
        Explore a delightful collection of traditional Italian recipes, from
        pasta and pizza to desserts. Get inspired with easy-to-follow cooking
        guides and tips, bringing the flavors of Italy right to your kitchen.
        Buon appetito!
      </ThemedText>

      <AppRating rating={rating} setRating={setRating} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  justifyText: {
    textAlign: "justify",
  },
});
