import React, { Component } from "react";
import Item from "./Product_Item";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { db } from "firebase/config";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    // this._isMounted = true;
    db.collection("product")
      .get()
      .then((snap) => {
        var arrayData = [];
        snap.forEach((doc) => {
          // console.log("doc.data().id");
          arrayData.push({
            id: doc.data().id,
            name: doc.data().name,
            price: doc.data().price,
            describe: doc.data().describe,
            image1: doc.data().image1,
            image2: doc.data().image2,
          });
        });

        this.setState({
          productList: arrayData,
        });
      });
  }

  render() {
    return (
      <div className="grid wide product">
        <div className="row">
          <div className="product-describe">
            <div className="product-describe--text1">OUR TOP SELLERS</div>
            <div className="product-describe--text2">
              Being one step ahead of a bakery trend is not so important to me.
            </div>
          </div>
          {this.state.productList.map((value, key) => {
            return (
              <Item
                id={value.id}
                image1={value.image1}
                image2={value.image2}
                name={value.name}
                price={value.price}
                describe={value.describe}
              ></Item>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Product;
