import { CartProduct } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
interface CartItemComponentProps {
  item: CartProduct;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onDelete: (id: number) => void;
}

export default function CartItemCard({
  item,
  onUpdateQuantity,
  onDelete,
}: CartItemComponentProps) {
  const handleQuantityChange = (increment: boolean) => {
    const newQuantity = increment
      ? item.quantity + 1
      : Math.max(1, item.quantity - 1);
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleDelete = () => {
    Alert.alert("Remove Item", `Remove ${item.title} from cart?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => onDelete(item.id),
      },
    ]);
  };

  return (
    <View className="bg-white rounded-lg shadow-sm border border-gray-100 mb-3 p-4">
      <View className="flex-row">
        <Image
          source={{ uri: item?.image }}
          className="w-20 h-20 rounded-lg bg-gray-100"
          resizeMode="cover"
        />

        <View className="flex-1 ml-4">
          <View className="flex-row items-start justify-between">
            <View className="flex-1 mr-2">
              <Text
                className="text-lg font-semibold text-gray-800 mb-1"
                numberOfLines={2}
              >
                {item?.title}
              </Text>

              <Text className="text-xl font-bold text-blue-600 mb-3">
                ₱{item?.price.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity onPress={handleDelete} className="p-2">
              <Ionicons name="trash-outline" size={20} color="#ef4444" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center bg-gray-100 rounded-lg">
              <TouchableOpacity
                onPress={() => handleQuantityChange(false)}
                className="p-2"
              >
                <Ionicons name="remove" size={16} color="#374151" />
              </TouchableOpacity>

              <Text className="mx-3 text-lg font-semibold text-gray-800 min-w-[24px] text-center">
                {item?.quantity}
              </Text>

              <TouchableOpacity
                onPress={() => handleQuantityChange(true)}
                className="p-2"
              >
                <Ionicons name="add" size={16} color="#374151" />
              </TouchableOpacity>
            </View>

            {/* Subtotal */}
            <Text className="text-sm text-gray-600 font-medium">
              Subtotal: ₱{(item?.price * item?.quantity).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
