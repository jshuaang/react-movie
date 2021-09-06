import request from "../utils/request"


function Navbar() {
    return (
        <div className="relative">
            <div className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap py-5 space-x-10 px-10 sm:px-20 sm:space-x-20">
                {Object.entries(request).map(([key,{title, url}]) => (
                    <h2 className="cursor-pointer duration-200 transform hover:scale-125 hover:text-white active:text-yellow-500" key={key}>{title}</h2>
                ))}
            </div>
             <div className="bg-gradient-to-l from-gray-800 absolute h-10 w-28 top-2 right-0"></div>
        </div>
    )
}

export default Navbar
