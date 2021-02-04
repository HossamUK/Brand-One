import React, { useState } from "react";
import Nav from "./Nav";
import "./productPage.css";
import { AiFillStar } from "react-icons/ai";

export default function ProductPage() {
  const [colorName, setColorName] = useState(0);
  const product = {
    rating: 3.8,
    colors: ["blue", "red", "white", "black"],
  };
  const rating = () => {
    let stars = [];
    let rating = Math.round(product.rating);
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i}></AiFillStar>);
    }
    return stars;
  };
  const colors = () => {
    let color = [];
    let colorsNumber = product.colors.length;
    for (let i = 0; i < colorsNumber; i++) {
      color.push(
        <div key={i} className="product_buttons">
          <button
            onMouseEnter={() => {
              setColorName(i);
            }}
            className="product_color"
            style={{ backgroundColor: product.colors[i] }}
          ></button>
        </div>
      );
    }
    return color;
  };
  return (
    <div className="product">
      <Nav border={true}></Nav>
      <div className="product_left">
        <div className="left_contant">
          <h1>Manz Sport</h1>
          <div className="left_price">
            <span>$</span>
            <span>39.99</span>
          </div>
          <div className="product_stars">{rating()}</div>
          <p>
            Everything you need for your day and night. The Apollo Backpack
            seamlessly transitions between day & night giving you the
            functionality
          </p>
          <div className="product_colors">
            <div>{colors()}</div>

            <p>{product.colors[colorName]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}