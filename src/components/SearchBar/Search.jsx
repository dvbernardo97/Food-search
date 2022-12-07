import React from "react";
import Navi from "../NavBar/Navi";
import SubNav from "../NavBar/SubNav";
import SearchResults from "../SearchResults/SearchResults";

export default function Search() {
    return (
        <div>
            <Navi />
            <SubNav />
            <SearchResults />
        </div>
    )
}