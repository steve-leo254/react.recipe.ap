//import React from "react"

import "./header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <h2>logo.</h2>
            </div>
            <div className="search">
                <input 
                type="text" 
                placeholder="search..."
                />
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/">cotact</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">home</a></li>
                    <li><button>sign up</button></li>
                </ul>
            </nav>
        </div>
    )
}