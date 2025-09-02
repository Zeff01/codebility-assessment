import { useCartStore } from "@/store/useCartStore";
import { Product } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

interface AddToCartModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product;
  inStock: boolean;
}

export function AddToCartModal({
  visible,
  onClose,
  product,
  inStock,
}: AddToCartModalProps) {
  const [qty, setQty] = useState(1);
  const { addProduct } = useCartStore();
  const increase = () => setQty((q) => q + 1);
  const decrease = () => setQty((q) => (q > 1 ? q - 1 : 1));
  async function onAdd() {}
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        className="flex-1 bg-black/40 justify-end"
      >
        <View className="bg-white rounded-t-2xl p-6">
          <Text className="text-lg font-bold mb-2">{product.title}</Text>

          <Text className="text-blue-600 text-xl font-semibold mb-4">
            ₱{product.price.toFixed(2)}
          </Text>

          <Text
            className={`mb-4 ${inStock ? "text-green-600" : "text-red-500"}`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </Text>

          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-gray-700 font-medium">Quantity</Text>
            <View className="flex-row items-center gap-4">
              <TouchableOpacity
                onPress={decrease}
                className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center"
              >
                <Ionicons name="remove" size={20} color="black" />
              </TouchableOpacity>
              <Text className="text-lg font-semibold w-6 text-center">
                {qty}
              </Text>
              <TouchableOpacity
                onPress={increase}
                className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center"
              >
                <Ionicons name="add" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            disabled={!inStock}
            onPress={() => {
              addProduct(
                {
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  quantity: qty,
                },
                qty
              );
              ToastAndroid.show(
                "Product successfully added to cart",
                ToastAndroid.SHORT
              );
              onClose();
            }}
            className={`py-4 rounded-xl items-center ${
              inStock ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            <Text className="text-white font-semibold text-lg">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
