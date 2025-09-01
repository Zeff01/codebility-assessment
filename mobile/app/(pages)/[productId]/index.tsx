import { AddToCartModal } from "@/components/AddToCartModal";
import { ItemSkeleton } from "@/components/Skeletons";
import useGetItem from "@/hooks/useGetItem";
import { useCartStore } from "@/store/useCartStore";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function ViewProductScreen() {
  const { productId } = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { product, error, isPending, refetch } = useGetItem(
    productId as string
  );
  const { productCount } = useCartStore();

  const [inStock] = useState(true);
  if (isPending) return null;
  const handleAddToCart = () => {
    setModalVisible(true);
  };

  const productImages = product.images || [product.image];
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={16} color="#fbbf24" />);
    }

    if (hasHalfStar) {
      stars.push(
        <Ionicons key="half" name="star-half" size={16} color="#fbbf24" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons
          key={`empty-${i}`}
          name="star-outline"
          size={16}
          color="#fbbf24"
        />
      );
    }

    return stars;
  };

  if (!product) return null;
  return (
    <>
      <View className="flex-1 bg-white">
        <StatusBar barStyle="dark-content" backgroundColor="white" />

        <View className="flex-row items-center justify-between p-4 bg-white shadow-sm">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className="p-2"
          >
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>

          <Text className="text-lg font-semibold text-gray-800">
            Product Details
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/(pages)/cart")}
            className="relative p-2"
            activeOpacity={0.7}
          >
            <Ionicons name="cart-outline" size={24} color="black" />
            {productCount() > 0 && (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full min-w-[20px] h-5 items-center justify-center px-1">
                <Text className="text-white text-xs font-bold">
                  {productCount() > 99 ? "99+" : productCount()}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        {isPending && <ItemSkeleton />}

        {error && (
          <View className="flex-1 items-center justify-center bg-white p-4">
            <Ionicons name="alert-circle-outline" size={48} color="red" />
            <Text className="text-lg text-gray-700 mt-2">
              Failed to load product
            </Text>
            <TouchableOpacity
              onPress={() => refetch()}
              className="mt-4 bg-blue-500 px-4 py-2 rounded-lg"
            >
              <Text className="text-white font-semibold">Retry</Text>
            </TouchableOpacity>
          </View>
        )}

        {!isPending && product && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="bg-gray-50">
              <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                  const index = Math.round(
                    event.nativeEvent.contentOffset.x / width
                  );
                  setSelectedImageIndex(index);
                }}
                scrollEventThrottle={16}
              >
                {productImages.map((imageUri: string, index: number) => (
                  <Image
                    key={index}
                    source={{ uri: imageUri }}
                    style={{ width, height: width }}
                    resizeMode="contain"
                  />
                ))}
              </ScrollView>

              {productImages.length > 1 && (
                <View className="flex-row justify-center py-4">
                  {productImages.map((index: number) => (
                    <View
                      key={index}
                      className={`w-2 h-2 rounded-full mx-1 ${
                        index === selectedImageIndex
                          ? "bg-blue-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </View>
              )}
            </View>

            <View className="p-4">
              <View className="mb-2">
                <Text className="text-blue-500 text-sm font-medium uppercase tracking-wide">
                  {product.category}
                </Text>
              </View>

              <Text className="text-2xl font-bold text-gray-800 mb-2">
                {product.title}
              </Text>

              {product.rating && (
                <View className="flex-row items-center mb-4">
                  <View className="flex-row mr-2">
                    {renderStars(product.rating.rate)}
                  </View>
                  <Text className="text-gray-600 text-sm">
                    {product.rating.rate} ({product.rating.count} reviews)
                  </Text>
                </View>
              )}

              <View className="flex-row items-center justify-between mb-6">
                <Text className="text-3xl font-bold text-blue-600">
                  ₱{product.price.toFixed(2)}
                </Text>
                <View
                  className={`px-3 py-1 rounded-full ${
                    inStock ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <Text
                    className={`text-sm font-medium ${
                      inStock ? "text-green-800" : "text-red-800"
                    }`}
                  >
                    {inStock ? "In Stock" : "Out of Stock"}
                  </Text>
                </View>
              </View>

              <View className="mb-6">
                <Text className="text-lg font-semibold text-gray-800 mb-3">
                  Description
                </Text>
                <Text className="text-gray-600 leading-6">
                  {showFullDescription
                    ? product.description
                    : `${product.description.substring(0, 150)}...`}
                </Text>
                <TouchableOpacity
                  onPress={() => setShowFullDescription(!showFullDescription)}
                  className="mt-2"
                >
                  <Text className="text-blue-500 font-medium">
                    {showFullDescription ? "Read Less" : "Read More"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}

        <View className="p-4 bg-white border-t border-gray-200">
          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={handleAddToCart}
              className={`flex-1 py-4 rounded-lg border-2 ${
                inStock
                  ? "border-blue-500 bg-white"
                  : "border-gray-300 bg-gray-100"
              }`}
            >
              <View className="flex-row items-center justify-center">
                <Ionicons
                  name="cart-outline"
                  size={20}
                  color={product.inStock ? "#3b82f6" : "#9ca3af"}
                />
                <Text
                  className={`ml-2 font-semibold ${
                    inStock ? "text-blue-500" : "text-gray-400"
                  }`}
                >
                  Add to Cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <AddToCartModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        product={{ ...product, inStock }}
        inStock={inStock}
      />
    </>
  );
}
