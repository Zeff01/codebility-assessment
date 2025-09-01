import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { ProductSkeleton } from "@/components/Skeletons";
import { useGetProducts } from "@/hooks/useGetProducts";
import { useCartStore } from "@/store/useCartStore";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { products, isPending, error, isFetching, refetch } = useGetProducts();
  const { productCount } = useCartStore();

  return (
    <SafeAreaView className="flex-1 bg-blue">
      <Header
        onCartPress={() => router.push("/(pages)/cart")}
        cartCount={productCount()}
        title="MyStore"
      />

      {/* Loading state */}
      {isPending && (
        <View className="flex-row flex-wrap p-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <View key={i} className="p-2 w-1/2">
              <ProductSkeleton />
            </View>
          ))}
        </View>
      )}

      {error && (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-lg mb-3">
            Failed to load products
          </Text>
          <TouchableOpacity
            onPress={() => refetch()}
            className="bg-white px-4 py-2 rounded-lg"
          >
            <Text className="text-blue font-semibold">Retry</Text>
          </TouchableOpacity>
        </View>
      )}

      {!isPending && !error && products && (
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <View className="p-2 w-1/2">
              <ProductCard product={item} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          className="p-4"
          refreshing={isFetching}
          onRefresh={refetch}
        />
      )}
    </SafeAreaView>
  );
}
