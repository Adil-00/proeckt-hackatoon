import axios from "axios";
import React, { useReducer } from "react";
import { API } from "../Helpers/constans";
export const shopContext = React.createContext();

const INIT_STATE = {
  shops: [],
};

const reduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_SHOP":
      return { ...state, shops: action.payload };
  }
};

const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, INIT_STATE);

  const getShop = async () => {
    const { data } = await axios(`${API}/shop`);

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

  return (
    <shopContext.Provider
      value={{
        shop: state.shops,
        shopAdd,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
