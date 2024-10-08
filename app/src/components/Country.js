import Image from "next/image"
export default function Country({country}){
    return(
        <div>
            <div className="relative h-[100px] w-[200px]">
            <Image src={country.flags.png} layout="fill"/>
            </div>
            <h1>{country.name.common}</h1>
        </div>
    )
}