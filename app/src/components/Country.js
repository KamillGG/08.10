import Image from "next/image"
export default function Country({country}){
    return(
        <div className="p-2 border border-black flex flex-col items-center">
            <div className="relative h-[100px] w-[200px] p-2">
            <Image src={country.flags.png} layout="fill" objectFit="contain" alt={country.name.common}/>
            </div>
            <h1 className="text-center font-semibold border-black border-t m-1 text-xl">{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
        </div>
    )
}