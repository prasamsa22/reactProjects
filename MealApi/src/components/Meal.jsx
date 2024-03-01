import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Meal = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(items);
  return (
    <div className="container">
      {items.map((item) => (
        <div className="card">
          <img src={item.strMealThumb} alt="" />
          <div className="content">
            <p>{item.strMeal}</p>
            <p>#{item.idMeal}</p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Meal;
