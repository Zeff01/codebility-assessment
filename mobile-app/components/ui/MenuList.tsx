import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FlatList, View } from "react-native";
import MenuItem from "./MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { menuActions, IMenuData } from "@/store/slices/menuSlice";

export default function MenuList() {
  const dispatch = useDispatch();
  const menus = useSelector((state: RootState) => state.menu.menus);

  const renderItem = ({ item }: { item: IMenuData }) => {
    const backgroundColor = item.isCart === 1 ? "#6e3b6e" : "#f9c2ff";
    const color = item.isCart === 1 ? "white" : "black";

    const onAddedHandler = (id: number) => {
      dispatch(menuActions.toggleMenuItem(id));
    };

    return (
      <View>
        <MenuItem
          menuItem={item}
          onAdded={onAddedHandler}
          textColor={color}
          backgroundColor={backgroundColor}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={menus}
      renderItem={renderItem}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
}
