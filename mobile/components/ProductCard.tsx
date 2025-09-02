import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AddToCartModal } from "./AddToCartModal";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: `/(pages)/[productId]`,
            params: { productId: product.id },
          })
        }
      >
        <View className="bg-white rounded-lg shadow-lg overflow-hidden">
          <View className="relative">
            <Image
              source={{ uri: product.image }}
              className="w-full h-48 object-cover"
              resizeMode="cover"
            />

            <TouchableOpacity
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md"
              onPress={handleAddToCart}
            >
              <Ionicons name={"cart-outline"} size={18} color="#6b7280" />
            </TouchableOpacity>

            <View className="absolute top-3 left-3 bg-blue-500 px-2 py-1 rounded-full">
              <Text className="text-white text-xs font-medium capitalize">
                {product.category}
              </Text>
            </View>
          </View>

          <View className="p-4">
            <Text
              className="text-lg font-bold text-gray-800 mb-1"
              numberOfLines={2}
              style={{ minHeight: 50 }}
            >
              {product.title}
            </Text>
            <View className="flex-row">
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons key={star} name="star" size={10} color="#fbbf24" />
              ))}
            </View>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-2xl font-bold text-blue-600">
                ₱{product.price.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <AddToCartModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        product={{ ...product }}
        inStock={true}
      />
    </>
  );
}
