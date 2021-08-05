import Mail from "@material-ui/icons/Mail";
import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { API } from "../Helpers/constans";
export const shopContext = React.createContext();

const INIT_STATE = {
  shops: [],
  edit: [],
  pagination: 1,
};

const reduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_SHOP":
      return {
        ...state,
        shops: action.payload.data,
        pagination: Math.ceil(action.payload.headers["x-total-count"] / 2),
      };

    case "SHOP_EDIT":
      return {
        ...state,
        edit: action.payload,
      };
    default:
      return state;
  }
};

const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, INIT_STATE);

  const getShop = async (history) => {
    const search = new URLSearchParams(history.location.search);
    search.set("_limit", 2);
    history.push(`${history.location.pathname}?${search.toString()}`);

    let data = await axios(`${API}/shop${window.location.search}`);

    dispatch({
      type: "GET_SHOP",
      payload: data,
    });
  };

  const shopAdd = async (newObj, history) => {
    await axios.post(`${API}/shop`, newObj);

    getShop(history);
  };

  const deleteShop = async (id, history) => {
    await axios.delete(`${API}/shop/${id}`);

    getShop(history);
  };

  const editShop = async (id) => {
    let { data } = await axios(`${API}/shop/${id}`);

    dispatch({
      type: "SHOP_EDIT",
      payload: data,
    });
  };

  const saveShop = async (newObj, id, history) => {
    await axios.patch(`${API}/shop/${id}`, newObj);
    getShop(history);
  };

  return (
    <shopContext.Provider
      value={{
        shops: state.shops,
        edit: state.edit,
        pagination: state.pagination,
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
