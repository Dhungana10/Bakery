import React, { useContext, useRef } from "react"
import styles from "./Bakery.module.css"
import CartContext from "../../store/cart-context"

const Bakery = (props) => {
  const cartCtx = useContext(CartContext)

  const inputQtyRef = useRef()

  const addToCart = () => {

    cartCtx.addItemHandler({
      id: props.id,
      name: props.name,
      des: props.des,
      price: props.price,
      qty: inputQtyRef.current.value
    })
  }
  return (
    <li className={styles.food}>
      <div>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.price}>${props.price}</p>
        <p className={styles.des}>{props.des}</p>
      </div>
      <div>
        <label>Amount</label>
        <input type="number" min="1" defaultValue={1} ref={inputQtyRef} />
        <button onClick={addToCart} className={styles["add-button"]}>
          +Add
        </button>
      </div>
    </li>
  )
}

export default Bakery
