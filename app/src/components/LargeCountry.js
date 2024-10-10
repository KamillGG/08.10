import Image from "next/image"
export default function LargeCountry({info}){
    return(
            <>
                <div className="relative w-[600px] h-[300px] border border-black">
                    <Image layout="fill" src={info[0].flags.png} alt="Flaga" objectFit="contain"/>
                </div>
                <h1 className="text-2xl text-center">{info[0].name.common}</h1>
                <h1 className="text-xl text-center">Capital: {info[0].capital}</h1>
                <h1 className="text-xl text-center">Population: {info[0].population}</h1>
                <h1 className="text-xl text-center">Continents: {info[0].continents.toString()}</h1>
                <h1 className="text-m text-center w-[600px] break-words">Timezones: {info[0].timezones.toString()}</h1>
                <h1 className="text-m text-center w-[600px] break-words">Languages: {Object.values(info[0].languages).toString()}</h1>
            </>
    )
}