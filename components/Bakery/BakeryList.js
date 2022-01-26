import React, { Fragment } from "react"
import Bakery from "./Bakery"
import styles from "./BakeryList.module.css"

const BakeryList = ({ bakery }) => {
  return (
    <ul className={styles['bakery-list']}>
      {bakery.map((bakery) => {
        return  <Bakery
        
            id={bakery._id}
            key = {bakery._id}
            name={bakery.name}
            price={bakery.price}
            des={bakery.des}
          />
        
      })}
    </ul>
  )
}

export default BakeryList
