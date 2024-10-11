import Image from "next/image";


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
        <div className="bg-pallete03 rounded-[15px] p-[20px] flex flex-col justify-around w-[300px]">

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
    )
}

export default Card;