import Card from "@/components/card";
import Image from "next/image";
import { Suspense } from "react";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    id: string; 
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    image: string;
    affiliation: string;
  }

interface IDataStaticIndex{
    results: IData[]
}

const Perso = async ({params: {id}} : IPerso) => {
    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data: IData = await res.json()

    
    return(
        <div className="flex justify-center items-center mb-[100px]">
            <Suspense fallback={
                <div className="bg-pallete01 p-[40px] text-[30px] font-bold "> Loading...</div>
            }>
                <Card data={data}/>
            </Suspense>
        </div>
    )
}
export default Perso;

export async function generateStaticParams() {
    const res = await fetch("https://dragonball-api.com/api/characters");
    const data: IDataStaticIndex = await res.json()

    return data.items.map((item) => item.id.toString());
}