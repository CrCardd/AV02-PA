"use client"

import { Suspense, useEffect, useState } from "react";

import Card from "@/components/card";
import Pagination from "@/components/pagination";

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
  const [totalPage, setTotalPage] = useState<string>("");
  const [name, setName] = useState<string>("");
  
  const handlePage = (i:string) => setPage(i)


  useEffect(() =>{
    api.get(`/characters?page=${page}`).then((result) => {

      setErro(false)
      setData(result.data.items)
      setTotalPage(result.data.meta.totalPages)

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


  return (
    <div className="w-full flex justify-center flex-col items-center gap-[40px]">


      {erro && 

        <div className="w-full h-[70px] bg-red-700 justify-center flex items-center text-[20px] font-bold text-pallete01">
          <h2>{errorMsg}</h2>
        </div>
      
      }

      <Suspense fallback={
        <div className="bg-pallete01 p-[40px] text-[30px] font-bold "> Loading...</div>
      }>
        <div className="flex flex-wrap justify-center w-[70%] gap-[40px]">
          {data.map(item => 
              <Card key={item.id} data={item}/>
          )}
        </div>
      </Suspense>

      <footer className="p-[20px]">
        <Pagination page={page} className={"flex justify-center gap-[20px]"} qtd={totalPage} set={handlePage}/>
      </footer>
    </div>
  );
}

export default Home;
