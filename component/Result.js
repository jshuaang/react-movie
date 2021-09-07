import Thumbnail from "./Thumbnail"
import {useRouter} from 'next/router'

function Result({results}) {
    const router = useRouter()

    return (
        <div className="h-full w-full px-5 my-5 sm:grid sm:grid-cols-3">
            {results.map( res => (
                <Thumbnail key={res.id}  result={res} onClick={() => router.push(`/detail?id=${res.id}`, console.log(res))}/>
            ))}
        </div>
    )
}

export default Result
