import React from "react";
import { useState } from "react";


export default function SearchBar(props) {
    const [item, setItem] = useState(props.term || "")
    const [location, setLocation] = useState(props.location || "")

    function Submit(e){
        console.log(item, location)
        e.preventDefault()
    }


    return (
        <form>
            <button onSubmit={Submit}>Search</button>
            <input className={`input" ${['input-control']}`} onChange={(e) => setItem(e.target.value)} type="text" placeholder="Food" />
            <div>Near</div>
            <input className={`input" ${['input-control']}`}  type="text" onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
                    <button>find</button>
        </form>
    )
}