import CartItemCard from "@/components/CartItemCard";
import { useCartStore } from "@/store/useCartStore";
import { CartProduct } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  const { products, productCount, updateQuantity, removeProduct, clearCart } =
    useCartStore();
  const [cartItems, setCartItems] = useState<CartProduct[]>(products);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
    updateQuantity(id, quantity);
  };

  const handleDeleteItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    removeProduct(id);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert(
        "Empty Cart",
        "Your cart is empty. Add some items to continue."
      );
      return;
    }
    //This is just a simulation that I've set as if the cart is already checkedout
    Alert.alert("Checkout", "Item Successfully checked out");
    clearCart();
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="flex-row items-center justify-between p-4 bg-white shadow-sm">
          <TouchableOpacity onPress={() => router.back()} className="p-2">
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-gray-800">
            Shopping Cart
          </Text>
          <View className="w-10" />
        </View>

        <View className="flex-1 items-center justify-center px-8">
          <View className="bg-gray-200 w-32 h-32 rounded-full items-center justify-center mb-6">
            <Ionicons name="cart-outline" size={64} color="#9ca3af" />
          </View>

          <Text className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Your cart is empty
          </Text>

          <Text className="text-gray-600 text-center mb-8 leading-6">
            Looks like you haven't added any items to your cart yet. Start
            shopping to fill it up!
          </Text>

          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-blue-500 px-8 py-4 rounded-lg"
          >
            <Text className="text-white font-semibold text-lg">
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row items-center justify-between p-4 bg-white shadow-sm">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>

        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-800">
            Shopping Cart
          </Text>
          <Text className="text-sm text-gray-600">{productCount()} items</Text>
        </View>
        <View className="w-10" />
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <CartItemCard
            key={item.id}
            item={item}
            onUpdateQuantity={handleUpdateQuantity}
            onDelete={handleDeleteItem}
          />
        )}
        ListFooterComponent={() => (
          <View className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mt-4 mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Order Summary
            </Text>

            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-gray-600">
                  Subtotal ({totalItems} items)
                </Text>
                <Text className="text-gray-800">₱{subtotal.toFixed(2)}</Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Shipping</Text>
                <Text className="text-gray-800">
                  {shipping === 0 ? "Free" : `₱${shipping.toFixed(2)}`}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Tax</Text>
                <Text className="text-gray-800">₱{tax.toFixed(2)}</Text>
              </View>

              {shipping === 0 && (
                <View className="flex-row items-center mt-2">
                  <Ionicons name="checkmark-circle" size={16} color="#10b981" />
                  <Text className="text-green-600 text-sm ml-1">
                    Free shipping on orders over ₱100
                  </Text>
                </View>
              )}

              <View className="border-t border-gray-200 pt-2 mt-2">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold text-gray-800">
                    Total
                  </Text>
                  <Text className="text-xl font-bold text-blue-600">
                    ₱{total.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <View className="p-4 bg-white border-t border-gray-200">
        <View className="flex-row gap-3">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-1 py-4 rounded-lg border-2 border-gray-300 bg-white"
          >
            <Text className="text-gray-700 font-semibold text-center">
              Continue Shopping
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleCheckout}
            className="flex-1 py-4 rounded-lg bg-blue-500"
          >
            <View className="flex-row items-center justify-center">
              <Text className="text-white font-semibold mr-2">Checkout</Text>
              <Text className="text-white font-bold">₱{total.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
