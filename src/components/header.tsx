import Image from "next/image"

import logo from "@/app/assets/logo-api02.png"
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

interface IOptions {
    op1: string,
    op2: string,
}

const Header = ({op1,op2}:IOptions) => {
    return(
        <div className="bg-pallete01 fixed w-full h-[65px] shadow-2xl rounded-b-[10px] z-50">
            <Image className="h-[90%] left-[1%] top-[10%] w-auto absolute" src={logo} alt="logo.png"/>
            <div className="flex justify-around items-center h-full w-full top-[40%] flex-wrap">
                <Link href={ROUTES.home} className="font-bold text-pallete03 ">{op1}</Link>
                <Link href={ROUTES.axios} className="font-bold text-pallete03 ">{op2}</Link>
            </div>
        </div>
    )
}

export default Header;