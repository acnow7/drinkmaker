import { useState, useEffect } from "react";
import React from 'react'

function Home({drink, setDrink}) {

    const [alcohol, setAlcohol] = useState("Gin");
    const [description, setDescription] = useState("")
    const [searchInput, setSearchInput] = useState("")


        useEffect(() => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${alcohol}`;
            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                
                
              
                setDescription(data.ingredients[0].strDescription)
              });
          }, [alcohol]);


          const handleChange = (e) => {
            setSearchInput(e.target.value)
          }
          const handleSubmit = (e) => {
            e.preventDefault()
            setDrink(searchInput)
          }


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
      <div class="col" onClick={() => setAlcohol("Gin")}>
        Gin
      </div>
      <div class="col" onClick={() => setAlcohol("Tequila")}>
        Tequila
      </div>
      <div class="col" onClick={() => setAlcohol("Brandy")}>
        Brandy
      </div>
      <div class="col" onClick={() => setAlcohol("Vodka")}>
        Vodka
      </div>
      <div class="col" onClick={() => setAlcohol("Whiskey")}>
        Whiskey
      </div>
      <div class="col" onClick={() => setAlcohol("Rum")}>
        Rum
      </div>
    </div>
  </div>
  <div className="home-Image">
 </div><div class="card text-center">
  <div class="card-header">
    
  </div>
  <div class="card-body">
    <h5 class="card-title">{alcohol} origins</h5>
    <p class="card-text">{description}</p>
    <a href="#" class="btn btn-primary">Drinks</a>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>


  </>
  )
}

export default Home
