import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  iconPosition?: "left" | "right";
  type?: "solid" | "outline";        
  style?: ViewStyle;
};

export default function LoginButton({
  title,
  onPress,
  icon,
  iconPosition = "left",
  type = "solid",
  style,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === "solid" ? styles.solid : styles.outline,
        style,
      ]}
      onPress={onPress}
    >
      <View style={styles.contentRow}>
        {icon && iconPosition === "left" && (
          <Ionicons name={icon} size={20} style={styles.icon} />
        )}

        <Text
          style={[
            styles.text,
            type === "outline" && { color: "#FF2D87" },
          ]}
        >
          {title}
        </Text>

        {icon && iconPosition === "right" && (
          <Ionicons name={icon} size={20} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  solid: {
    backgroundColor: "#FF2D87",
  },
  outline: {
    borderWidth: 2,
    borderColor: "#FF2D87",
    backgroundColor: "transparent",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    color: "#007bff",
  },
});
