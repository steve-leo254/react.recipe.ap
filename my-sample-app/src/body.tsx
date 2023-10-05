//import React from "react";
import "./board.css"
import Card from "./card";
import { useState, useEffect } from "react"
//import Card from "./card";



export default function Body(){

    const [items, setItems] = useState(true);
    const [loading, setLoading] = useState(true)

 
    const fetcher = async ()=>{
        try {
            const res = await fetch('https://651401808e505cebc2ea8462.mockapi.io/shopping')
            const data = await res.json()
            setItems(data)
            setLoading(false)
            console.log(items)
        } catch (error) {
            console.error("thsi is a new error", error)
            setLoading(false)
        }
    }
    fetcher()
 

   const card = items.map(()=>{
    return(
        <div className="card">

        </div>
    )
   })


 

    return(
        <div className="body">
            <div className="title">
                <h1>Your Favourite Recipes</h1>
                <div className="foodds">
                <button className="button" onClick={fetcher}>
                   Get Recipes
                </button>
                <div className="display">
                    {loading ? <p>we're almost there</p> : card}
                </div>
                </div>
            </div>
        </div>
    )
}