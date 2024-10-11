"use client"

import { useEffect, useState } from "react";



const Pagination = ({qtd, set, className, page, totalPx}:{qtd:string, set:Function, className:string, page:string, totalPx:number}) => {

    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const pags = [];

    for (let i = 1; i <= parseInt(qtd); i++) {
        if((i*160) < width){
            pags.push(
                <button key={i} onClick={() => set(i)} className={`w-[80px] h-[40px] flex justify-center items-center ${i === parseInt(page) ? `bg-pallete04` : `bg-pallete01`} rounded-[10px]`}>
                    <strong className="text-[18px]">{i}</strong>
                </button>
            )
        }
    }

    return(
        <div className={className}>

            {pags.map(item => item)}


        </div>
    )
}

export default Pagination;