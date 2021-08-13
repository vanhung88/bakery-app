import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "firebase/config";
import ItemDetail from "./ItemDetail";

function ProductDetail(props) {
  const [Product, setProduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    db.collection("product")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          if (doc.data().id === id) {
            setProduct({
              id: doc.data().id,
              introduce: doc.data().introduce,
              name: doc.data().name,
              price: doc.data().price,
              describe: doc.data().describe,
              image1: doc.data().image1,
              image2: doc.data().image2,
              weight: doc.data().weight,
              dimensions: doc.data().dimensions,
            });
            return;
          }
        });
      });
  }, []);
  return (
    <div>
      <ItemDetail
        name={Product.name}
        image1={Product.image1}
        image2={Product.image2}
        introduce={Product.introduce}
        price={Product.price}
        describe={Product.describe}
        id={Product.id}
        weight={Product.weight}
        dimensions={Product.dimensions}
      ></ItemDetail>
    </div>
  );
}

export default ProductDetail;
