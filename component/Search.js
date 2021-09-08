import {useState} from 'react'
import {useRouter} from 'next/router'

function Search() {
    const [value, setValue] = useState([])
    const router = useRouter()

    const valueSearch = (e) => {
        setValue(e.target.value)
    }

    const searchMovie = (e) => {
        if(e.keyCode === 13){
            router.push(`/?value=${value}`)
        }
    }

    return (
        <div>
            <input placeholder="Input movie..." className="p-1 px-5 rounded-lg w-64 focus:outline-none text-gray-800" onKeyDown={searchMovie} onChange={valueSearch}></input>
        </div>
    )
}

export default Search
