import { useState, useEffect } from "react";
import React from 'react'

function Home() {

    const [alcohol, setAlcochol] = useState({});
    


        // useEffect(() => {
        //     const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=gin`;
        //     fetch(url)
        //       .then((response) => response.json())
        //       .then((data) => {
                
        //         setAlcohol(data.ingridients);
        //       });
        //   }, []);


  return (
 <>
 <div className='form-search'>
<form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search your drink" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
</div>
    <div class="alcohol-Menu">
    <div class="row">
      <div class="col">
        Gin
      </div>
      <div class="col">
        Tequila
      </div>
      <div class="col">
        Brandy
      </div>
      <div class="col">
        Vodka
      </div>
      <div class="col">
        Whiskey
      </div>
      <div class="col">
        Rum
      </div>
    </div>
  </div>
  <div className="home-Image">
 
  </div>
  </>
  )
}

export default Home
