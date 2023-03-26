import React from "react";

export default {
    title: 'useMemoPractice'
}

export const UseMemoPractice = () => {

    let cities = [
        {country: 'Belarus' , city: 'Minsk'},
        {country: 'Belarus' , city: 'Grodno'},
        {country: 'Belarus' , city: 'Brest'},
        {country: 'Russia' , city: 'Moscow'},
        {country: 'Russia' , city: 'St. Petersburg'},
        {country: 'Russia' , city: 'Rostov'},
        {country: 'GB' , city: 'London'},
        {country: 'GB' , city: 'Manchester'},
        {country: 'GB' , city: 'Liverpool'}
    ]

    let belarusCities = [...cities].filter(c => c.country === 'Belarus')

    return <div>
        <div>
            <label>All cities: </label>
            <select id="select-country" value={cities[0].city}>
                <option disabled>Please choose a country</option>
                {cities.map(c => {
                    return <option value={c.city}>{c.city}</option>
                })}
            </select>
        </div>
        <br/>
        <div>
            <label>Belarus cities: </label>
            <select id="select-country" value={cities[0].city}>
                <option disabled>Please choose a country</option>
                {belarusCities.map(c => {
                    return <option value={c.city}>{c.city}</option>
                })}
            </select>
        </div>
    </div>
}