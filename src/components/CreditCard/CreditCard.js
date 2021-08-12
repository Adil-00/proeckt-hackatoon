import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useHistory } from "react-router-dom";
import { userContext } from "../../context/UserContext";
import CreditCardTwoToneIcon from "@material-ui/icons/CreditCardTwoTone";
import "./CreditCard.css";

const CreditCard = () => {
  const [focus, setFocus] = useState("");
  const [handler, setHandler] = useState(false);
  const [inpValue, setInpValue] = useState({
    number: "",
    cvc: "",
    expiry: "",
    name: "",
  });

  function handleInpValue(e) {
    let obj = {
      ...inpValue,
      [e.target.name]: e.target.value,
    };
    setInpValue(obj);
  }

  useEffect(() => {
    handleValidInputs();
  }, [inpValue]);

  function handleValidInputs() {
    if (
      inpValue.number.length === 16 &&
      inpValue.cvc.length === 3 &&
      inpValue.expiry.length === 4 &&
      inpValue.name.length > 0
    ) {
      setHandler(true);
      console.log("true");
    } else {
      setHandler(false);
      console.log("false");
    }
  }

  const history = useHistory();
  const { buyProduct } = useContext(userContext);

  const handleClick = () => {
    buyProduct();
    history.push("/");
    alert("Спасибо за покупку!");
  };

  return (
    <div>
      <Cards
        number={inpValue.number}
        name={inpValue.name}
        expiry={inpValue.expiry}
        cvc={inpValue.cvc}
        focused={focus}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={inpValue.number}
          maxLength="16"
          onChange={handleInpValue}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="name"
          placeholder="Card Holder Name"
          value={inpValue.name}
          onChange={handleInpValue}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={inpValue.expiry}
          maxLength="4"
          onChange={handleInpValue}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={inpValue.cvc}
          maxLength="3"
          onChange={handleInpValue}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
      {handler ? (
        <Button
          endIcon={<CreditCardTwoToneIcon />}
          variant="contained"
          onClick={handleClick}
          color="secondary"
        >
          Оплатить
        </Button>
      ) : (
        <div>Заполните все поля</div>
      )}
    </div>
  );
};

export default CreditCard;
