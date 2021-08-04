import axios from "axios";
import React, { useReducer } from "react";
import { API } from "../Helpers/constans";
export const shopContext = React.createContext();

const INIT_STATE = {
  shops: [],
  edit: [],
};

const reduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_SHOP":
      return { ...state, shops: action.payload };
    case "SHOP_EDIT":
      return { ...state, edit: action.payload };
    default:
      return state;
  }
};

const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, INIT_STATE);

  const getShop = async () => {
    const { data } = await axios(`${API}/shop/${window.location.search}`);

    dispatch({
      type: "GET_SHOP",
      payload: data,
    });
  };

  const shopAdd = async (newObj) => {
    await axios.post(`${API}/shop`, newObj);
    console.log(newObj);
    getShop();
  };

  const deleteShop = async (id) => {
    await axios.delete(`${API}/shop/${id}`);
    getShop();
  };

  const editShop = async (id) => {
    let { data } = await axios(`${API}/shop/${id}`);

    dispatch({
      type: "SHOP_EDIT",
      payload: data,
    });
  };

  const saveShop = async (newObj, id) => {
    await axios.patch(`${API}/shop/${id}`, newObj);
    getShop();
  };

  return (
    <shopContext.Provider
      value={{
        shop: state.shops,
        edit: state.edit,
        shopAdd,
        getShop,
        deleteShop,
        saveShop,
        editShop,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
