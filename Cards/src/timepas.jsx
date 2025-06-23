// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   const [category, setCategory] = useState("all");
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     alert(`Searching for "${query}" in category "${category}"`);
//     // You can replace this with actual search logic
//   };

//   return (
//     <div className="search-container">
//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         className="search-select"
//       >
//         <option value="all">Categories</option>
//         <option value="priceLow">Price: Low to High</option>
//         <option value="priceHigh">Price: High to Low</option>
//         <option value="popularity">Popularity</option>
//         <option value="newest">Newest</option>
//       </select>

//       <input
//         type="text"
//         placeholder="Search here..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="search-input"
//       />

//       <button onClick={handleSearch} className="search-btn">
//         <FaSearch />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "wheat grass seeds (1kg) Gr...",
    image: require(".src/Images/vilage1.jpg"),
    description:
      "Wheat grass seeds for growing wheat grass at home. Best for juicing wheat grass. Wheat grass can be grown Indoor or Outdoors. A common method for sprout production Indoor is often on a tray in a growth medium such as Potting Mix.",
    price: "₹155",
  },
  {
    id: 2,
    title: "Organic Natural River Sand",
    image: require("./Images/sand.jpg"),
    description:
      "Completely Organic and does not contain any harmful chemicals. Ideal for organic planting.",
    price: "₹156",
  },
  {
    id: 3,
    title: "Garden Black Soil for All Veg",
    image: require("./Images/soil.jpg"),
    description:
      "Black soils constitute the food basket for many countries. Best for terrace gardening.",
    price: "₹176",
  },
  // Add more products...
];

function ProductCardGrid() {
  const [expanded, setExpanded] = useState(null);

  const toggleReadMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="grid-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="image-container">
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
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
            <h5 className="title">{product.title}</h5>
            <p className="description">
              {expanded === product.id
                ? product.description
                : `${product.description.substring(0, 100)}...`}
            </p>
            <span
              onClick={() => toggleReadMore(product.id)}
              className="read-toggle"
            >
              {expanded === product.id ? "Show less" : "Read more"}
            </span>
            <div className="price">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCardGrid;
