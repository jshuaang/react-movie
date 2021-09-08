import Image from 'next/image'
import {PlayIcon} from '@heroicons/react/outline'
import {useState} from 'react'
import {XIcon} from '@heroicons/react/outline'

function Poster({result, video}) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original'
    const [trailer, setTrailer] = useState(false)

    const watchTrailer = () => {
        trailer ? setTrailer(false) : setTrailer(true)
    }
    console.log(trailer)

    return (
        <div className="sm:w-96 w-80 rounded-lg overflow-hidden m-auto">
            <Image 
            layout="responsive"
            src={`${BASE_URL}${result.poster_path}`}
            width={800}
            height={1200}
            />
            <div className="w-full h-12 flex justify-center cursor-pointer bg-gray-400 text-gray-800 items-center font-bold hover:bg-gray-500 hover:text-gray-300" onClick={watchTrailer}>
                <PlayIcon className="h-8 mr-3" /> | <p className="ml-3">PLAY TRAILER</p>
            </div>
            {trailer ? 
            <>
            <div className="bg-gray-900 opacity-60 w-full h-full absolute top-0 bottom-0 left-0 right-0"></div>
            <div className="absolute z-10 top-0 bottom-0 left-0 right-0 w-full h-full bg-transparent px-2 py-48 lg:px-80 lg:py-36">
                    <XIcon className="h-8 mr-0 ml-auto cursor-pointer" onClick={watchTrailer}/>
                    <iframe src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="w-full h-60 sm:h-80 lg:h-96"></iframe>
            </div>
            </>
            : null }
        </div>
    )
}

export default Poster