import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../../context/UserContext";
import { calcSubPrice, calcTotalPrice } from "../../Helpers/calcPrice";

const Cart = () => {
  const { getCart, changeCountProductsInCart, cartData, buyProduct } =
    useContext(userContext);

  useEffect(() => {
    getCart();
    console.log("cart mounted");
  }, []);

  const history = useHistory();

  function handleClick() {
    buyProduct();
    history.push("/");
  }

  return (
    <>
      {cartData ? (
        cartData.length ? (
          <div className="cart">
            <div>
              <table>
                <thead>
                  <tr>
                    <th>image</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Кол-во</th>
                    <th>Сумма</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) => (
                    <tr key={item.product.id}>
                      <td>
                        <img width="50" src={item.product.image} />
                      </td>
                      <td>{item.product.title}</td>
                      <td>{item.product.price}</td>
                      <td>
                        <input
                          min="1"
                          type="number"
                          value={item.count}
                          onChange={(e) =>
                            changeCountProductsInCart(
                              e.target.value,
                              item.product.id
                            )
                          }
                        />
                      </td>
                      <td>{calcSubPrice(item)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4>Общая сумма: {calcTotalPrice(cartData)} сом</h4>
              <button onClick={handleClick}>Оплатить</button>
            </div>
          </div>
        ) : (
          <h1>Корзина пустая</h1>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Cart;
