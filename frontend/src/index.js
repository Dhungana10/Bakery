import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import {BrowserRouter as Router} from "react-router-dom";
import {CartContextProvider} from "./store/cart-context"

ReactDOM.render(
    <CartContextProvider>
    <Router>
    <App />
   </Router>
    </CartContextProvider>
, document.getElementById("root"));
