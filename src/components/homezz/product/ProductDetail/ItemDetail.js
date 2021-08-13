import "./ProductDetail.css";
import "../product.css";
import React, { useEffect, useRef, useState } from "react";
// import { addCart } from "../../../store/action/Ac_Cart";
import { addToCart } from "redux/Slice/cartSlice";
import { useDispatch } from "react-redux";

function ItemDetail(props) {
  const [amountCart, setAmount] = useState(1);
  const dispatch = useDispatch();
  const notify_Add_Cart2 = useRef(null);
  const {
    id,
    introduce,
    name,
    price,
    describe,
    image1,
    image2,
    weight,
    dimensions,
  } = props;
  const select_img1 = useRef(null);
  const select_img2 = useRef(null);
  const img_display = useRef(null);
  // const[imageCurrent,setImage]= useState(image1)

  function handleImage2() {
    select_img2.current.style.borderWidth = "1px";
    select_img1.current.style.borderWidth = "0px";
    img_display.current.src = `${image2}`;
  }
  function handleImage1() {
    select_img1.current.style.borderWidth = "1px";
    select_img2.current.style.borderWidth = "0px";
    img_display.current.src = `${image1}`;
  }

  let UpToAmount = () => {
    const a = amountCart + 1;
    setAmount(a);
  };
  let UpDownAmount = () => {
    if (amountCart >= 2) {
      const a = amountCart - 1;
      setAmount(a);
    }
  };
  let addToCart2 = () => {
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
  let towHandleCart2 = () => {
    addToCart2();
    notify_Add_Cart2.current.style.transform = "translateY(0px)";
    setTimeout(() => {
      notify_Add_Cart2.current.style.transform = "translateX(500px)";
      // notify_Add_Cart2.current.style.transition = "0.2s";
    }, 1000);
  };
  return (
    <div className="grid wide">
      <div className="row">
        <div className="addCart--success2" ref={notify_Add_Cart2}>
          <img className="addCart--img2" src="./img/addCart.png" alt="" />
          <span className="addCart--text2">Has been added to cart</span>
        </div>

        <span className="directional">
          Home/Category/{name}/{describe}
        </span>
        <div className="product">
          <div className="select_img">
            <div className="select_img1" ref={select_img1}>
              <img src={image1} onClick={() => handleImage1()} />
            </div>
            <div className="select_img2" ref={select_img2}>
              <img src={image2} onClick={() => handleImage2()} />
            </div>
          </div>
          <div className="product_img">
            <img src={image1} alt="" ref={img_display} />
          </div>
          <div className="product__imfomation">
            <div className="product__name">{describe}</div>
            <div className="product__price">$ {price}</div>
            <div className="product__introduce">{introduce}</div>
            <div className="product__addCart">
              <div className="amount">{amountCart}</div>
              <div className="select">
                <div
                  className="select--up select_up_down"
                  onClick={() => UpToAmount()}
                >
                  {" "}
                  +{" "}
                </div>
                <div
                  className="select--down select_up_down"
                  onClick={() => UpDownAmount()}
                >
                  {" "}
                  -{" "}
                </div>
              </div>
              <div className="cart-btn" onClick={() => towHandleCart2()}>
                ADD TO CART
              </div>
            </div>
            <div className="product__SKU">SKU: {`${id}.cake`} </div>
            <div className="product__Categories">Categories : {name}</div>
            <div className="product__tag">tag : {name}, cake</div>
          </div>
        </div>

        <div className="Additional_information">
          <div className="title">Additional information</div>
          <div className="weight info">Weight : {weight}</div>
          <div className="Dimensions info">Dimensions : {dimensions} </div>
          <div className="Size info">Size : XS, S, M, L, XL</div>
          <div className="Color info">Dimensions : 90 x 60 x 90 cm</div>
          <div className="Storage info">
            Storage : Relaxed fit shirt-style dress with a rugged
          </div>
        </div>
      </div>
    </div>
  );
}

ItemDetail.propTypes = {};

export default ItemDetail;
