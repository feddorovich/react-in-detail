import React from "react";

export function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <div><Star/></div>
            <div><Star/></div>
            <div><Star/></div>
            <div><Star/></div>
            <div><Star/></div>
        </div>
    );
}

function Star() {
    console.log("Star rendering")
    return (
        <span>Star</span>
    )
}