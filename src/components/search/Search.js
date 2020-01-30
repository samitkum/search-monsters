import React from "react"
import "./search.css"
const Search = ({handleChange,placeholer}) => {
    return(
        <div>
        <input className="search" onChange={handleChange} type="search" placeholder={placeholer}/>
        </div>
    )
}

export default Search;