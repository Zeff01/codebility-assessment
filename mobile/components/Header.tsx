import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  cartCount?: number;
  onCartPress?: () => void;
  title?: string;
}

export default function Header({
  cartCount = 0,
  onCartPress,
  title = "Shop",
}: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between w-full p-4 bg-white shadow-sm border-b border-gray-400">
      <View className="flex-1">
        <Text className="text-2xl font-bold text-gray-800">{title}</Text>
      </View>

      <TouchableOpacity
        onPress={onCartPress}
        className="relative p-2"
        activeOpacity={0.7}
      >
        <Ionicons name="cart-outline" size={24} color="black" />
        {cartCount > 0 && (
          <View className="absolute -top-1 -right-1 bg-red-500 rounded-full min-w-[20px] h-5 items-center justify-center px-1">
            <Text className="text-white text-xs font-bold">
              {cartCount > 99 ? "99+" : cartCount}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
