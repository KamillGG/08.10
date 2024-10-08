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
    <div>
    {countries && countries.map((item,idx)=>(
      <Country country={item} key={idx}/>

    ))}
    </div>
  )
}