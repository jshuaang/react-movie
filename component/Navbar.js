import { useRouter } from "next/router"
import request from "../utils/request"

function Navbar() {
    const router = useRouter();

    return (
        <div className="relative m-3">
            <div className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap py-5 space-x-10  sm:px-16 sm:space-x-20">
                {Object.entries(request).map(([key,{title, url}]) => (
                    <h2 onClick={() => router.push(`/?genre=${key}`)} className="cursor-pointer duration-200 transform hover:scale-125 hover:text-white active:text-yellow-500" key={key}>{title}</h2>
                ))}
            </div>
             <div className="bg-gradient-to-l from-gray-800 absolute h-10 w-28 top-2 right-0"></div>
        </div>
    )
}

export default Navbar
