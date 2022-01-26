import React, { Fragment, useState, useEffect } from "react";
import BakeryList from "../components/Bakery/BakeryList";
import MainImage from "../assets/donut.jpg";
import styles from "./AllBakery.module.css";
import axios from "axios"; 

const AllBakery = () => {
  
  const[bakery, setBakery] = useState([]);
   
  useEffect(()=>{
      async function getBakery()
      {
        try{
            const res = await axios.get('http://localhost:8000/allbakery'); 
            // console.log(res);
            setBakery(res.data); 
        }
        catch(e){
          console.log(e.message);
        }
      }
      getBakery();
  },[])

  return (
    <Fragment>
      <section className={styles.poster}>
        <img src={MainImage} alt="main"/>
      </section>
      <BakeryList bakery={bakery} /> 
    </Fragment>
  )
}

export default AllBakery;
