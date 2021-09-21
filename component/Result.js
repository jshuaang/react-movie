import Thumbnail from "./Thumbnail"
import {useRouter} from 'next/router'

function Result({results}) {
    const router = useRouter()

    console.log(results.length)
    if(results.length > 0){
        return (
            <div className="h-full w-full px-5 my-5 sm:grid sm:grid-cols-3">
                {results.map( res => (
                    <Thumbnail key={res.id}  result={res} onClick={() => router.push(`/detail?id=${res.id}`, console.log(res))}/>
                ))}
            </div>
        )
    }else{
        return (
            <div className="text-center font-extrabold text-2xl">
                <h1>{router.query.value} not found</h1>
            </div>
        )
    }
    

}

export default Result
