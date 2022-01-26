import React from 'react';
import { NavLink } from 'react-router-dom';
import CartButton from '../UI/CartButton';
import styles from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink to = "/allbakery" className = {styles.active} >Home</NavLink></li>
                <li><NavLink to = "/products" >Products</NavLink></li>
                <li><NavLink to = "/" >Weddings</NavLink></li>
                <li><NavLink to = "/" >About Us</NavLink></li>
                <li><NavLink to = "/" >Contact Us</NavLink></li>
                <li><NavLink to = "/my-cart" className={styles.last}><CartButton/></NavLink></li>
            </ul>
        </nav>
  );
};

export default MainNavigation;
