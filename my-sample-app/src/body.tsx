//import React from "react";
import "./board.css"
import Card from "./card";
import "./card.css"
import { useState, useEffect } from "react"
//import Card from "./card";



export default function Body(){

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

 
    const fetcher = async ()=>{
        try {
            const res = await fetch('https://651401808e505cebc2ea8462.mockapi.io/shopping')
            const data = await res.json()
            setItems(data)
            setLoading(false)
            console.log(items)
        } catch (error) {
            console.error("this is a new error", error)
            setLoading(false)
        }
    }
    fetcher()
 

   const card = items.map((item)=>{
    return(
        <div className="cards">
            <div className="card" key={item.id}>
        <div className="image">
            <img src={item.image} alt="my photo"
            width={100}
            />
        </div>
        <div className="information">
          <div className="name">{item.name}</div>
          <div className="type">{item.cloth}</div>
          <div className="native">{item.price}</div>
        </div> 
        </div>
     </div>
    )
   })


 

    return(
       <div className="all-cards">
          <div className="display">
                    {loading ? <p>Don't Worry Your Items are Loading</p> : card}
        </div>
       </div>
    )
}