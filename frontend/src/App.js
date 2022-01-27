import React from "react"
import "./App.css"
import {Route , Routes } from "react-router-dom"

import AllBakery from "./pages/AllBakery"
import MyCart from "./pages/MyCart"
import Layout from "./components/Layout/Layout"
import Products from "./pages/Products"

const App = () => {
  return (
      <Layout>
           <Routes>   
            <Route path="/allbakery" element={<AllBakery/>}/>
            <Route path="/my-cart" element={<MyCart/>}/>
            <Route path="/products" element={<Products/>}/>
            </Routes>
      </Layout>
    
  );
}

export default App;
