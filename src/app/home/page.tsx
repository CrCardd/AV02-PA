"use client"

import Card from "@/components/card";
import { useEffect, useState } from "react";


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

const Home = () => {

  const [characters, setCharacters] = useState<IData[]>([])

  useEffect(() =>{
    const load = async () =>{
        const res = await fetch("https://dragonball-api.com/api/characters");
        const data = await res.json();
        setCharacters(data.items);
      }
      load()
    }, [])

  console.log(characters);
    
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="flex flex-wrap justify-center w-[70%] gap-[40px]">
        {characters.map(item => 
          <Card data={item}/>
        )}
      </div>
    </div>
  );
}

export default Home;
