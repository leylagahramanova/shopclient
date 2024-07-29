import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import styles from "./CartItem.module.css";
import {
  calcTotalMoney,
  changeQuantity,
  decreaseQuantity,
  increaseQuantity,
  removeProductFromCart,
} from "../features/orderProductSlice";

function CartItem(props) {
  const dispatch = useDispatch();
  const product = {
    id: props.id,
    orderQuantity: props.orderQuantity,
  };

  const [quantity, setQuantity] = useState(1);

  function handleChangeQuantity(e) {
    setQuantity(parseInt(e.target.value));
  }

  function selectQuantity(e) {
    if (e.key === "Enter") {
      if (e.target.value >= 1 && e.target.value <= 99) {
        setQuantity(parseInt(e.target.value));
        product.orderQuantity = parseInt(quantity);
        dispatch(changeQuantity(product));
        dispatch(calcTotalMoney());
      } else {
        setQuantity(1);
        product.orderQuantity = parseInt(quantity);
        dispatch(changeQuantity(product));
        dispatch(calcTotalMoney());
      }
    }
  }

  return (
    <div>
      <div className="p-d-flex p-jc-center p-my-4 p-px-4 p-py-4 p-shadow-3">
        <div className={styles.imageContainer}>
          <img alt={props.title} src={props.imgSrc} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.cardTitle}>{props.title}</div>
          <div className={styles.cardAuthor}>Author: {props.author}</div>
          <div className={styles.cardPrice}>Price: ${props.price}</div>
          <div className={styles.cardButtonContainer}>
            {props.orderQuantity <= 1 ? (
              <Button
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger"
                onClick={() => {
                  dispatch(removeProductFromCart(product));
                  dispatch(calcTotalMoney());
                }}
              />
            ) : (
              <Button
                icon="pi pi-minus"
                className="p-button-rounded"
                onClick={() => {
                  setQuantity(quantity - 1);
                  dispatch(decreaseQuantity(product));
                  dispatch(calcTotalMoney());
                }}
              />
            )}
            <span>
              <InputText
                value={quantity}
                className={styles.productQuantity}
                onChange={handleChangeQuantity}
                onKeyDown={selectQuantity}
              />
            </span>
            <Button
              icon="pi pi-plus"
              className="p-button-rounded"
              onClick={() => {
                setQuantity(quantity + 1);
                dispatch(increaseQuantity(product));
                dispatch(calcTotalMoney());
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;