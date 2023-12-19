// Product.js
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import ProductCard from './ProductCard';
import './Product.css';


export const Product = () => {

  const [productcategory, setProductcategory] = useState([]);
  const [categories, setCategories] = useState("electronics");
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    catgories();
    details();
  }, [categories]);

  const catgories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    setProductcategory(data);
  };

  const details = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${categories}`);
    const data = await res.json();
    setProductlist(data);
  };

  return (
    <div className='productcontainer'>
      <div className='product'>
        <div className="product-sidebar">
          {productcategory.map((ele) => (
            <div className='button-category' key={ele}>
              <NavLink  ClassName='active' to={ele} onClick={() => setCategories(ele)}>
                {ele && ele}
              </NavLink>
            </div>
          ))}
        </div>

        <div className='product_maincontainer'>
         
            {productlist.map((ele) => (
              <ProductCard key={ele.id} product={ele} />
              
            ))}
         
        </div>
      </div>
    </div>
  );
};
