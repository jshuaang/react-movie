import Image from 'next/image'
import {PlayIcon} from '@heroicons/react/outline'

function Poster({result}) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original'

    return (
        <div className="sm:w-96 w-80 rounded-lg overflow-hidden m-auto">
            <Image 
            layout="responsive"
            src={`${BASE_URL}${result.poster_path}`}
            width={800}
            height={1200}
            />
            <div className="w-full h-12 flex justify-center bg-gray-400 text-gray-800 items-center font-bold hover:bg-gray-500 hover:text-gray-300">
                <PlayIcon className="h-8 mr-3" /> | <p className="ml-3">PLAY TRAILER</p>
            </div>
        </div>
    )
}

export default Poster