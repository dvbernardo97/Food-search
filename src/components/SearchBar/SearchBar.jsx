import React from "react";


export default function SearchBar() {
    return (
        <>
            <button>Search</button>
            <input class="input" type="text" placeholder="what are you looking for" />
            <button>Near</button>
            <input class="input" type="text" placeholder="Where?" />
        </>
    )
}