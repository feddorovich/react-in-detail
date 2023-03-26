import React, {ChangeEvent, useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemoPractice'
}

type citiesType = {country: string, city: string}

let cities: citiesType[] = [
    {country: 'Belarus', city: 'Minsk'},
    {country: 'Belarus', city: 'Grodno'},
    {country: 'Belarus', city: 'Brest'},
    {country: 'Russia', city: 'Moscow'},
    {country: 'Russia', city: 'St. Petersburg'},
    {country: 'Russia', city: 'Rostov'},
    {country: 'GB', city: 'London'},
    {country: 'GB', city: 'Manchester'},
    {country: 'GB', city: 'Liverpool'}
]

export const UseMemoPractice = () => {
    const [selestCity, setSelectCity] = useState('')
    const selectCityHandle = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        console.log(1)
        setSelectCity(e.currentTarget.value)
    },[])

    let belarusCities = [...cities].filter(c => c.country === 'Belarus')
    const [selestCityBelarus, setSelectCityBelarus] = useState('')
    const selectBelarusCityHandle = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(2)
        setSelectCityBelarus(e.currentTarget.value)
    }

    return <div>
        <div>
            <First value={selestCity} onChange={selectCityHandle} list={cities} label ={'All cities:'}/>
            <br/>
            <First value={selestCityBelarus} onChange={selectBelarusCityHandle} list={belarusCities} label ={'Belarus cities:'}/>
        </div>
    </div>
}

const First = React.memo((props: any) => {
    console.log(props.label)
    return <div>
        <label>{props.label}</label>
        <select id="select-all" value={props.value} onChange={props.onChange}>
            <option disabled>Please choose a country</option>
            {props.list.map((c: citiesType, i: number) => {
                return <option key={i} value={c.city}>{c.city}</option>
            })}
        </select>
    </div>
})

