import React, { useContext } from "react"
import styles from "./CartButton.module.css"
import { FaShoppingCart } from "react-icons/fa"
import CartContext from "../../store/cart-context"

const CartButton = () => {
  const CartCtx = useContext(CartContext)
  return (
    <button className={styles["cart-btn"]}>
      <span className={styles.text}>
        <FaShoppingCart className={styles["cart-icon"]} />
        Your Cart
      </span>
      <span className={styles.badge}>{CartCtx.cartLength}</span>
    </button>
  )
}

export default CartButton
