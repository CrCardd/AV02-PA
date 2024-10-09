import Image from "next/image"

import logo from "@/app/assets/logo-api02.png"

interface IOptions {
    op1: string,
}

const Header = ({op1}:IOptions) => {
    return(
        <div className="bg-pallete01 fixed w-full h-[65px] shadow-2xl rounded-b-[10px]">
            <Image className="h-[80%] left-[1%] top-[10%] w-auto absolute" src={logo} alt="logo.png"/>
            <div className="flex justify-around items-center h-full w-full top-[40%] flex-wrap">
                <p className="font-bold text-pallete03 ">{op1}</p>
            </div>
        </div>
    )
}

export default Header;