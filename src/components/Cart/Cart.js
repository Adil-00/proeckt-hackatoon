import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  withStyles,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../../context/UserContext";
import { calcSubPrice, calcTotalPrice } from "../../Helpers/calcPrice";
import CreditCardTwoToneIcon from "@material-ui/icons/CreditCardTwoTone";

const Cart = () => {
  const { getCart, changeCountProductsInCart, cartData, buyProduct } =
    useContext(userContext);

  useEffect(() => {
    getCart();
    console.log("cart mounted");
  }, []);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const history = useHistory();

  function handleClick() {
    buyProduct();
    history.push("/credit");
  }

  return (
    <>
      {cartData ? (
        cartData.length ? (
          <TableContainer component={Paper}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Фото товара</StyledTableCell>
                    <StyledTableCell>Название</StyledTableCell>
                    <StyledTableCell>Цена</StyledTableCell>
                    <StyledTableCell>Кол-во</StyledTableCell>
                    <StyledTableCell>Сумма</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartData.map((item) => (
                    <TableRow key={item.product.id}>
                      <TableCell>
                        <img width="50" src={item.product.image} />
                      </TableCell>
                      <TableCell>{item.product.title}</TableCell>
                      <TableCell>{item.product.price}</TableCell>
                      <TableCell>
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
                      </TableCell>
                      <TableCell>{calcSubPrice(item)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Typography variant="h4" component="h2" gutterBottom>
                Общая сумма: {calcTotalPrice(cartData)} сом
              </Typography>
              <Button
                endIcon={<CreditCardTwoToneIcon />}
                variant="contained"
                onClick={handleClick}
                color="secondary"
                align="right"
              >
                Купить
              </Button>
            </div>
          </TableContainer>
        ) : (
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            variant="h2"
            gutterBottom
          >
            Корзина пуста
          </Typography>
        )
      ) : (
        <Typography variant h2 gutterBottom>
          Загрузка страницы...
        </Typography>
      )}
    </>
  );
};

export default Cart;
