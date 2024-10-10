"use client"
import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
export default function Border({code}){
    const [border,setBorder] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(()=>{
        const getData = async ()=>{
            try{
                const data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            const json = await data.json()
            setBorder(json[0])
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
        <div>
        {load ? (""):(
            <Link href={`./${code}`}>
                <div className="p-2 border border-black flex flex-col items-center">
                    <div className="relative h-[100px] w-[200px] p-2">
                        <Image src={border.flags.png} layout="fill" objectFit="contain" alt={border.name.common}/>
                    </div>
                    <h1 className="text-center font-semibold border-black border-t m-1 text-xl">{border.name.common}</h1>
                    <p>Capital: {border.capital}</p>
                    <p>Population: {border.population}</p>
                </div>
            </Link>
        )}
        </div>
    )
}