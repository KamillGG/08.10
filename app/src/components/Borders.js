"use client"
import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
export default function Border({codes}){
    const [border,setBorder] = useState([])
    const [load, setLoad] = useState(true)
    const [most, setMost] = useState(null)
    const [least, setLeast] = useState(null)
    useEffect(()=>{
        const getData = async ()=>{
            const url = `https://restcountries.com/v3.1/alpha?codes=${codes.toString()}`
            try{
                const data = await fetch(url)
                const json = await data.json()
                console.log(json)
                setBorder(json)
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
    useEffect(()=>{
        if(border.length!==1){
        var most = 0
        var mostCode = null
        var least = 0
        var leastCode = null
        border.forEach(element => {
            if(element.population>most){
                most = element.population
                mostCode= element.cca2
            }
            if(least>element.population || least==0){
                least = element.population
                leastCode= element.cca2
            }
        });
        setMost(mostCode)
        setLeast(leastCode)
        
            
    }
    },[border])
    console.log(most)
    console.log(least)
    return(
        <div className="flex flex-row gap-3 flex-wrap p-2 items-center justify-center overflow-auto w-screen">
        {load ? (""):(
            border.map((item,idx)=>(
                <Link href={`./${item.cca2}`} key={idx}>
                    <div className="p-2 border border-black flex flex-col items-center">
                        <div className="relative h-[100px] w-[200px] p-2">
                            <Image src={item.flags.png} layout="fill" objectFit="contain" alt={item.name.common}/>
                        </div>
                        <h1 className="text-center font-semibold border-black border-t m-1 text-xl">{item.name.common}</h1>
                        <p>Capital: {item.capital}</p>
                        <p>Population: {item.population} {item.cca2==most?"(Biggest here)":""}{item.cca2==least?"(Smallest here)":""}</p>
                    </div>
                </Link>
            ))
            
        )}
        </div>
    )
}