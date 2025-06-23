import React, { useState } from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import img from "./Images/vilage1.jpg"; 

function ProductCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const shortText = `Description...Wheat grass seeds for growing wheat grass at home. Best`;
  const fullText = `Description...Wheat grass seeds for growing wheat 
  grass at home. Best for juicing wheat grass. Wheat grass can be grown
   Indoor or Outdoors. A common method for sprout production Indoor is 
   often on a tray in a growth medium such as Potting Mix. Many people 
   grow their own wheat grass by putting wheat seeds in water and then 
   harvesting the leaves. Wheat grass is primarily used as a concentrated
    source of nutrients. It contains Vitamin A, C, E, Iron, Calcium, Magnesium and Amino Acids.`;

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={img} alt="product" className="product-img" />
        <div className="hover-icons">
          <button className="icon-btn">
            <FaShoppingCart />
          </button>
          <button className="icon-btn">
            <FaEye />
          </button>
        </div>
      </div>

      <div className="card-content">
        <h5 className="title">wheat grass seeds (1kg) Gr...</h5>

        <p className={`description ${isExpanded ? "expanded" : ""}`}>
          {isExpanded ? fullText : shortText}
        </p>

        <span onClick={toggleExpand} className="read-toggle">
          {isExpanded ? "Show less" : "Read more"}
        </span>

        <div className="price">₹155</div>
      </div>
    </div>
  );
}

export default ProductCard;
