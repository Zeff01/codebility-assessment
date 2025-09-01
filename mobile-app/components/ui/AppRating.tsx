import StarRating from "react-native-star-rating-widget";
import { View, StyleSheet, Text } from "react-native";
interface IAppRating {
  rating: number;
  setRating: (rating: number) => void;
}

export default function AppRating({ rating, setRating }: IAppRating) {
  const ratingText =
    rating > 0
      ? `You rated this ${rating} star${rating > 1 ? "s" : ""}`
      : "Please rate this item";
  return (
    <View style={styles.container}>
      <StarRating rating={rating} onChange={setRating} />
      <Text style={styles.ratingText}>{ratingText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  ratingText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});
