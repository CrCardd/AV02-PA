"use client"

import { useEffect, useState } from "react";

import Card from "@/components/card";

import { api } from "@/constants/api"

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

  const [data, setData] = useState<IData[]>([]);

  const [erro, setErro] = useState<boolean>(false);
  const [errorMsg, setErroMsg] = useState<string>("Não foi possivel buscar os dados");
  const [page, setPage] = useState<string>("");
  const [name, setName] = useState<string>("");


  useEffect(() =>{
    api.get(`/characters?page=${page}`).then((result) => {

      console.log(result)
      setErro(false)
      setData(result.data.items)

      if(result.data.items == ""){
        setErroMsg("Página não encontrada")
        setErro(true);
      }
    }).catch((error) =>{
      // if(error.response.status === 404){
        // setErroMsg("Página não encontrada")
        // }
        // setErro(true);
  })
}, [page])

  console.log(data);
    
  return (
    <div className="w-full flex justify-center flex-col items-center gap-[50px]">

      <div className="flex justify-center w-full gap-[30px]">
        <input className="rounded-[8px] p-[5px] text-center" onChange={(e) => setPage(e.target.value)} type="text" placeholder="Página"/>
        {/* <input className="rounded-[8px] p-[5px] text-center" onChange={(e) => setName(e.target.value)} type="text" placeholder="Personagem"/> */}
      </div>

      {erro && 

        <div className="w-full h-[70px] bg-red-700 justify-center flex items-center text-[20px] font-bold text-pallete01">
          <h2>{errorMsg}</h2>
        </div>
      
      }

      <div className="flex flex-wrap justify-center w-[70%] gap-[40px]">
        {data.map(item => 
          <Card key={item.id} data={item}/>
        )}
      </div>
    </div>
  );
}

export default Home;
