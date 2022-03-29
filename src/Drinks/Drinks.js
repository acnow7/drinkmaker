import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function Drinks({ alcohol }) {
  const [drink, setDrink] = useState([]);

  let params = useParams();
  console.log(params);

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${params.alcohol}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDrink(data.drinks);
        console.log(data.drinks);
      });
  }, []);

  const list = drink.map((name1, index) => (
    <>
      <div className="card1">
        <img src={name1.strDrinkThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {name1.strDrink}</h5>
          <p className="card-text">Drink ID:{name1.idDrink} </p>
          <a href="#" className="btn btn-primary">
            Check Recipe
          </a>
        </div>
      </div>
    </>
  ));

  return (
    <div>
      <h1>{params.alcohol} menu</h1>

      <div> {list} </div>
    </div>
  );
}

export default Drinks;
