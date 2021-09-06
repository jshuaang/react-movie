import Thumbnail from "./Thumbnail"

function Result({results}) {
    return (
        <div className="h-full w-full px-5 my-5 sm:grid sm:grid-cols-3">
            {results.map( res => (
                <Thumbnail key={res.id}  result={res}/>
            ))}
        </div>
    )
}

export default Result
