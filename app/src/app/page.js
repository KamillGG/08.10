"use client"
import Country from "@/components/Country"
import { useState, useEffect } from "react"
export default function Home(){
  const [countries, setCountries] = useState(null)
  useEffect(()=>{
    const getData = async ()=>{
      const data = await fetch(`https://restcountries.com/v3.1/all`)
      const json = await data.json()
      setCountries(json)
    }
    getData()
  },[])
  console.log(countries)
  return(
    <div className="flex flex-row flex-wrap gap-3 pt-4 pb-4">
    {countries && countries.map((item,idx)=>(
      <Country country={item} key={idx}/>

    ))}
    </div>
  )
}