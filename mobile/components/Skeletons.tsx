import { View } from "react-native";

export function ProductSkeleton() {
  return (
    <View className="bg-white rounded-lg shadow-lg overflow-hidden">
      <View className="relative">
        <View className="w-full h-48 bg-gray-200" />
        <View className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
          <View className="w-5 h-5 bg-gray-300 rounded-full" />
        </View>
        <View className="absolute top-3 left-3 bg-blue-200 px-6 py-2 rounded-full" />
      </View>
      <View className="p-4">
        <View className="h-4 bg-gray-300 rounded mb-2 w-3/4" />
        <View className="h-3 bg-gray-200 rounded mb-3 w-1/2" />
        <View className="flex-col items-center justify-between mb-3">
          <View className="flex-row space-x-1">
            {[...Array(5)].map((_, i) => (
              <View key={i} className="w-4 h-4 bg-gray-300 rounded" />
            ))}
          </View>
          <View className="h-5 bg-gray-300 rounded w-16" />
        </View>
        <View className="h-10 bg-gray-300 rounded-lg" />
      </View>
    </View>
  );
}
export function ItemSkeleton() {
  return (
    <View className="bg-white rounded-lg overflow-hidden shadow mb-4 flex-1">
      <View className="bg-gray-300 w-full h-2/3" />
      <View className="p-3">
        <View className="bg-gray-300 w-1/2 h-8 rounded mb-2" />
        <View className="bg-gray-300 w-full h-5 rounded mb-2" />
        <View className="flex-row mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <View key={i} className="bg-gray-300 w-3 h-3 rounded-full mr-1" />
          ))}
        </View>
        <View className="bg-gray-300 w-1/4 h-5 rounded" />
        {Array.from({ length: 3 }).map((_, i) => (
          <View className="bg-gray-300 w-full h-10 rounded mt-2" />
        ))}
      </View>
    </View>
  );
}
