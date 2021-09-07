import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Poster from '../component/Poster'
import { CalendarIcon , ClockIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router'

const API_KEY = process.env.API_KEY

function detail({result}) {
    const router = useRouter()

    const getGenre = (title) => {
        router.push(`/?genre=fetch${title}Movie`)
    }

    return (
        <div>
            <Header />
            <Navbar />
            <div className="sm:flex justify-center m-5 sm:px-10 xl:px-40">
                <Poster result={result} />
                <div className="w-full sm:ml-20 m-5">
                    <div>
                        <h1 className="text-4xl font-bold text-white">{result.original_title}</h1>
                        <p className="italic text-lg">{result.tagline}</p>
                        <div className="flex">
                            <p className="mr-4"><CalendarIcon className="h-4 mr-1 inline-block"/>{result.release_date}</p>
                            <p><ClockIcon className="h-4 mr-1 inline-block"/>{result.runtime} min</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-xl uppercase font-bold text-gray-50 mb-1">Visit</h2>
                        <div>
                            <a href={result.homepage} target="_blank"><button className="h-10 mr-3 w-44 text-gray-800 font-bold rounded-lg bg-gray-300 hover:bg-gray-500 hover:text-gray-300">Homepage</button></a>
                            <a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank"><button className="h-10 w-44 text-gray-800 font-bold rounded-lg bg-gray-300 hover:bg-gray-500 hover:text-gray-300">IMDB</button></a>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-xl uppercase font-bold text-gray-50 mb-1">Overview</h2>
                        <p>{result.overview}</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-xl uppercase font-bold text-gray-50 mb-1">Genres</h2>
                        <div className="flex">
                            {result.genres.map(genre => (
                                <div key={genre.id} className="h-8 w-32 cursor-pointer mr-3 text-center p-1 text-gray-800 font-bold rounded-lg bg-gray-300 hover:bg-gray-500 hover:text-gray-300" onClick={() => getGenre(genre.name)}>{genre.name}</div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps (context) {
    const {id} = context.query

    const results = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    const res = await results.json()

    return {
        props: {
            result:res
        }
    }
}

export default detail
