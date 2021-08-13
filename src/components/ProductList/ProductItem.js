import "./style.scss";
import React, { Component, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/Slice/cartSlice";

function Item(props) {
  const notify_Add_Cart = useRef(null);
  const { id, image1, name, describe, price } = props;
  const dispatch = useDispatch();

  // add toc cart
  let addToCartFunction = () => {
    const Product = {
      describe: describe,
      id: id,
      price: price,
      image: image1,
      amount: 1,
    };
    const action = addToCart(Product);
    dispatch(action);
  };

  let towHandleCart = () => {
    addToCartFunction();
    notify_Add_Cart.current.style.transform = "translateY(0px)";
    setTimeout(() => {
      notify_Add_Cart.current.style.transform = "translateX(500px)";
    }, 1000);
  };

  return (
    <div className="col l-3 m-4 c-6 product__item">
      <div className="addCart--success" ref={notify_Add_Cart}>
        <img className="addCart--img" src="./img/addCart.png" alt="" />
        <span className="addCart--text">Has been added to cart</span>
      </div>

      <div className="product__item-border">
        <div className="product__item--img">
          <Link to={id}>
            <img src={image1} />{" "}
          </Link>
        </div>
        <div className="product__wrapper">
          <div className="product__item--name ">{name}</div>
          <div className="product__item--describe">{describe}</div>
          <div className="product__item--price">${price}</div>
          <div
            className="product__item--AddCart"
            onClick={() => towHandleCart()}
          >
            <span className="addCart-btn"> ADD TO CART</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
