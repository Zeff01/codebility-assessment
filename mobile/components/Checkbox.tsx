import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  value: boolean;
  onValueChange: (val: boolean) => void;
};

export default function Checkbox({ value, onValueChange }: Props) {
  return (
    <TouchableOpacity 
      style={styles.box}
      onPress={() => onValueChange(!value)}
      activeOpacity={0.8}
    >
      {value && <Ionicons name="checkmark" size={11} color="#000" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: "#999",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
