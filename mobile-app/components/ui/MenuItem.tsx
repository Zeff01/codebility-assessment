import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { IMenuData } from "@/store/slices/menuSlice";

interface IMenuItem {
  menuItem: IMenuData;
  onAdded: (id: number) => void;
  backgroundColor: string;
  textColor: string;
}

export default function MenuItem({
  menuItem,
  textColor,
  backgroundColor,
  onAdded,
}: IMenuItem) {
  const onPressHandler = () => {
    onAdded(menuItem.id);
  };
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.parentContainer}>
      <View
        style={{ ...styles.itemContainer, backgroundColor: backgroundColor }}
      >
        <View style={styles.leftContent}>
          <Text style={{ ...styles.menuName, color: textColor }}>
            {menuItem.name}
          </Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={{ color: textColor }}>{menuItem.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    marginVertical: 3,
  },
  itemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    padding: 10,
  },
  menuName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  leftContent: {
    width: "80%",
  },
  rightContent: {
    width: "20%",
    alignItems: "flex-end",
  },
});
