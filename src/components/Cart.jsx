import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Order from "./Order";
import styles from "./Cart.module.css";

function Cart() {
  const products = useSelector((state) => state.orderProducts.orderProducts);
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div>
          <h1>Cart Information</h1>
        </div>
        <div className={styles.cartInformation}>
          <div className={styles.cartProducts}>
            {products.map((product) => (
              <CartItem
                key={product.id}
                id={product.id}
                title={product.title}
                imgSrc={product.imgSrc}
                author={product.author}
                price={product.price}
                orderQuantity={product.orderQuantity}
              />
            ))}
          </div>
          <div className={styles.cartTotal}>
            <Order products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;