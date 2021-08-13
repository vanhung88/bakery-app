import React, { useRef, useState } from "react";
import { db } from "../../firebase/config";
import "./style.scss";
function Cart_item(props) {
  const { id, idDoc, image, amount, describe, price, handleRemove } = props;
  const [amountCart, setAmount] = useState(1);
  const subtotal = amountCart * price;
  const remove = useRef(null);
  const describeE = useRef(null);

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

  let removeProduct = () => {
    db.collection("cart").doc(idDoc).delete();
    const ran = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      handleRemove(ran);
    }, 300);
  };
  return (
    <div className="group-show">
      <div className="PRODUCT PRODUCT--show">
        <div className="cart-show--remove">
          <span
            className="cart-show--remove-icon"
            ref={remove}
            onClick={() => removeProduct()}
          >
            ×
          </span>
        </div>

        <div className="cart-show--image">
          <img src={image} alt="" />
        </div>
        <div className="cart-show--description" ref={describeE}>
          {describe}
        </div>
      </div>
      <div className="cart-title--group">
        <div className="cart-show--price PRICE hiddenOnMobile--lower">
          {price} $
        </div>
        <div className="cart-show--quantity QUANTITY">
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
        </div>
        <div className="cart-show--subtotal SUBTOTAL hiddenOnMobile--lower">
          {subtotal.toFixed(2)} $
        </div>
      </div>
    </div>
  );
}

export default Cart_item;
