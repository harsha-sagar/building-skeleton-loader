import React, { useState, useEffect } from 'react';
import '../style.css';

export default function Product({ productData }) {
  return (
    <div>
      <div className="product--title">
        <strong>{productData.title}</strong>
      </div>
      <div className="product--heading">
        <div className="product--heading__image">
          <img
            src={productData.image}
            className="product--heading__image__img"
          />
        </div>
        <div className="product--heading__facts">
          <span className="product--heading__facts__category">
            {productData.category}
          </span>
          {productData.price ? (
            <span>
              Price: <i>{productData.price}/-</i>
            </span>
          ) : null}
          {productData.rating ? (
            <span>
              User Reviews: <i>{productData.rating.rate}</i>
            </span>
          ) : null}
        </div>
      </div>
      <div className="product--detail">{productData.description}</div>
    </div>
  );
}
