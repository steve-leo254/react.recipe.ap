import React from "react";
import "./board.css"
import Card from "./card";
//import { useState, useEffect } from "react"


export default function Body(){


    const [food, setfood] = React.useState([]);


   

  const datas = data.map((item)=>{
         return<>
         <div className="card">
            <div className="name">
                {item.}
            </div>
         </div>
         
         
         </>
  })

    return(
        <div className="body">
            <div className="title">
                <h1>Your Favourite Recipes</h1>
                <div className="foodds">
                <button className="button">
                   Get Recipes
                </button>
                </div>
            </div>
        </div>
    )
}