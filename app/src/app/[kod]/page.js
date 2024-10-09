"use client"
import { useState,useEffect } from "react"
import Image from "next/image"
export default function Strony({params}){
    const [info,setInfo] = useState([])
    const [load,setLoad] = useState(true)
    useEffect(()=>{
        const getData = async ()=>{
            try{
                const data = await fetch(`https://restcountries.com/v3.1/alpha/${params.kod}`)
                const json = await data.json()
                setInfo(json)
            }
            catch(error){
                console.log(error)
            }
            finally{
                setLoad(false)
            }
        }
        getData()
    },[])
    return(
        <div className="w-full h-screen flex items-center justify-center">
            {load ? (<h1>Loading</h1>):(
                <div className="p-3 border border-black">
                <div className="relative w-[600px] h-[300px] border border-black">
                    <Image layout="fill" src={info[0].flags.png} alt="Flaga" objectFit="contain"/>
                </div>
                <h1 className="text-2xl text-center">{info[0].name.common}</h1>
                <h1 className="text-xl text-center">Capital: {info[0].capital}</h1>
                <h1 className="text-xl text-center">Population: {info[0].population}</h1>
                <h1 className="text-xl text-center">Continents: {info[0].continents.toString()}</h1>
                <h1 className="text-m text-center w-[600px] break-words">Timezones: {info[0].timezones.toString()}</h1>
                <h1 className="text-m text-center w-[600px] break-words">Languages: {Object.values(info[0].languages).toString()}</h1>
                </div>
            )}
        </div>
    )
}