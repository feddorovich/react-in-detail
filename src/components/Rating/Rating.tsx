import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(propps: RatingPropsType) {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={propps.value > 0}/>
            <Star selected={propps.value > 1}/>
            <Star selected={propps.value > 2}/>
            <Star selected={propps.value > 3}/>
            <Star selected={propps.value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }

}