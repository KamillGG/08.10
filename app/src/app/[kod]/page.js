"use client"
import { useState,useEffect } from "react"
import Border from "@/components/Borders"
import LargeCountry from "@/components/LargeCountry"
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
        <>
            {load ? (<h1>Loading</h1>):(
                <div className="flex items-center flex-col gap-[25px] p-2 w-full h-screen">
                    <div className="p-3 border border-black">
                        <LargeCountry info={info}/>
                    </div>
                    <>
                        {info[0].borders && 
                        
                        <Border codes={info[0].borders}/>
                        }
                    </>
                </div>
            )}
        </>
    )
}