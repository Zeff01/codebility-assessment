

import { categories, menuItems } from "@/data/mockData"
import { styles } from "@/styles/component/MenuList"
import type React from "react"
import { useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { CategoryFilter } from "./CategoryFilter"
import { MenuItemCard } from "./MenuItemCard"

export const MenuList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredItems = menuItems.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory,
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Menu</Text>
        <Text style={styles.subtitle}>Discover our delicious offerings</Text>
      </View>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ScrollView
        style={styles.menuContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.menuContent}
      >
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}

