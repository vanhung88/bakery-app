import React, { useEffect, useState, useRef } from "react";
import CartItem from "./Cart_item";
import db from "../../firebase/config";
import "./style.scss";
import { Link } from "react-router-dom";

function Cart(props) {
  const cartEmpty = useRef(null);

  const [cart_product, setCart_product] = useState([]);
  const [filter, setFilter] = useState(1);

  let handleRemove = (bienThayDoi) => {
    setFilter(bienThayDoi);
  };

  useEffect(() => {
    db.firestore()
      .collection("cart")
      .get()
      .then((snap) => {
        let arrayCart = [];
        snap.forEach((doc) => {
          arrayCart.push({
            id: doc.data().id,
            idDoc: doc.id,
            amount: doc.data().amount,
            price: doc.data().price,
            describe: doc.data().describe,
            image: doc.data().image,
          });
        });
        setCart_product(arrayCart);
        if (arrayCart.length === 0) {
          cartEmpty.current.style.display = "block";
        }
      });
  }, [filter]);

  return (
    <div className="product-cart">
      <div className="grid wide">
        <div className="row">
          <div className="col l-8 m12 c-12 cart-show">
            <div className="cart-text">Shopping Cart</div>

            <ul className="cart-title">
              <li className="cart-title__item PRODUCT">PRODUCT</li>
              <li className="cart-title--group">
                <div className="cart-title__item PRICE hiddenOnMobile--lower">
                  PRICE
                </div>
                <div className="cart-title__item cart-title__item-quantity QUANTITY ">
                  QUANTITY
                </div>
                <div className="cart-title__item SUBTOTAL hiddenOnMobile--lower">
                  SUBTOTAL
                </div>
              </li>
            </ul>

            {/* cart is empty */}
            <div className="cart--empty" ref={cartEmpty}>
              <h1>Your cart is currently empty.</h1>
              <Link to="/">
                <button>Return To Shop</button>
              </Link>
            </div>

            {/* lap qua cac phan tu cua cart  */}
            {cart_product.map((value, key) => {
              return (
                <CartItem
                  handleRemove={handleRemove}
                  amount={value.amount}
                  image={value.image}
                  price={value.price}
                  describe={value.describe}
                  id={value.id}
                  idDoc={value.idDoc}
                ></CartItem>
              );
            })}
          </div>
          <div className="col l-4 m-12 c-12 cart-tatols"></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
