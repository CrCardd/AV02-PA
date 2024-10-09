import Card from "@/components/card";
import Link from "next/link";
import { Suspense } from "react"



type IData = {
    id: string; 
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    image: string;
    affiliation: string;
  }[]


const ServerSide = async () =>{
    const res = await fetch("https://dragonball-api.com/api/characters")
    const data: IData = await res.json()

    
    return(
        <>
        <div className="flex flex-col">
            <Suspense fallback={<div> Loading...</div>}>
                <div className="w-full flex justify-center">
                    <div className="flex flex-wrap justify-center w-[70%] gap-[40px]">
                        {data.items.map((item) => {
                            return(
                                <div key={item.id} className="relative">
                                        <Card data={item}/>
                                        <Link href={`/character/${item.id}`} className="absolute top-[2%] left-[5%] bg-pallete04 font-bold text-pallete01 p-[10px] z-30 rounded-[7px]"> Abrir</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Suspense>
            </div>
        </>
    )
}

export default ServerSide;