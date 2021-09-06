import Image from 'next/image'
import {ThumbUpIcon} from '@heroicons/react/outline'

function Thumbnail({result}) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original'

    return (
        <div className="flex flex-col m-3 cursor-pointer group">
            <Image 
            layout="responsive"
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
            width={1290}
            height={780}
            />
            <div>
                <p className="truncate ">{result.overview}</p>
                <h2 className=" mt-1 text-2xl duration-100 transition-all ease-in-out group-hover:text-white group-hover:font-bold">{result.title}</h2>
                <div className="flex items-center opacity-0 group-hover:opacity-100">
                    <p>{result.release_date} · </p>
                    <ThumbUpIcon className="h-6 mx-2"/>
                    <p>{result.popularity}</p>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail
