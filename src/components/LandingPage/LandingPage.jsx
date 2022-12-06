import React from "react"
import NavBar from "../NavBar/NavBar"
import SearchBar from "../SearchBar/SearchBar"
import { SearchSuggestions } from "../SearchSuggestions/SearchSuggestions"

export default function LandingPage(){
    return(
     <>
     <NavBar />
      <SearchBar />
      <SearchSuggestions />
    </>
    )
}