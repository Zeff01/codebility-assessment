import { createSlice } from "@reduxjs/toolkit";

export interface IMenuData {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isCart: 1 | 0;
}

interface initialStateProps {
  menus: IMenuData[];
  totalCart: number;
}

const initialState: initialStateProps = {
  menus: [
    {
      id: 1,
      name: "Italian Pizza Overload",
      price: 199,
      imageUrl: "",
      isCart: 0,
    },
    {
      id: 2,
      name: "Italian Pasta",
      price: 150,
      imageUrl: "",
      isCart: 0,
    },
    {
      id: 3,
      name: "Spagetti Carbonara",
      price: 179,
      imageUrl: "",
      isCart: 0,
    },
    {
      id: 4,
      name: "Roasted Potatoes",
      price: 199,
      imageUrl: "",
      isCart: 0,
    },
    {
      id: 5,
      name: "Gelato",
      price: 68,
      imageUrl: "",
      isCart: 0,
    },
    {
      id: 6,
      name: "Arancini",
      price: 50,
      imageUrl: "",
      isCart: 0,
    },
    {
      id: 7,
      name: "Penne Arrabbiata",
      price: 96,
      imageUrl: "",
      isCart: 0,
    },
    {
      id: 8,
      name: "Fettuccine Alfredo",
      price: 178,
      imageUrl: "",
      isCart: 0,
    },
    {
      id: 9,
      name: "Caprese Salad",
      price: 199,
      imageUrl: "",
      isCart: 0,
    },
    {
      id: 10,
      name: "Prosciutto e Melone",
      price: 230,
      imageUrl: "",
      isCart: 0,
    },
  ],
  totalCart: 0,
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    toggleMenuItem(state, action) {
      const id = action.payload;

      const updatedMenus: IMenuData[] = state.menus.map((item: IMenuData) => {
        if (item.id === id) {
          return {
            ...item,
            isCart: item.isCart === 1 ? 0 : 1,
          };
        }

        return item;
      });

      state.menus = updatedMenus;
      state.totalCart = updatedMenus.filter((item) => item.isCart === 1).length;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
