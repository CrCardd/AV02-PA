import Image from "next/image";


import cardBg from '@/app/assets/background-card.png'

interface IData {

    data: {
        affiliation: string;
        gender: string;
        image: string;
        ki: string;
        maxKi: string;
        name: string;
        race: string;
    }
  }

const Card = ({data}: IData) => {
    return(
        <div className="w-[300px]">
            <div className="bg-pallete01 flex justify-center items-center h-[400px] rounded-t-[15px] relative">
                <Image className="absolute w-full h-full  rounded-t-[15px]" src={cardBg} alt=''/>
                <Image className="hover:cursor-pointer h-[110%] w-auto hover:scale-110 transition-transform duration-500 z-10" src={data.image} alt={data.image} width={1000} height={1000} priority/>
            </div>
            <div className="bg-pallete03 rounded-b-[15px] p-[20px] flex flex-col justify-around">

                <p className="font-bold text-[24px] text-pallete01">{data.name}</p>
                <p className="font-bold text-[17px] text-pallete04">{data.race} - {data.gender}</p>
                <div>
                    <p className="font-bold text-[17px] text-pallete01">Base KI:</p>
                    <p className="font-bold text-[17px] text-pallete04">{data.ki}</p>
                </div>
                <div>
                    <p className="font-bold text-[17px] text-pallete01">Total KI:</p>
                    <p className="font-bold text-[17px] text-pallete04">{data.maxKi}</p>
                </div>
                <div>
                    <p className="font-bold text-[17px] text-pallete01">Affiliation:</p>
                    <p className="font-bold text-[17px] text-pallete04">{data.affiliation}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;