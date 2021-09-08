import {HomeIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'
import Search from './Search'
import {useState} from 'react'
import {useRouter} from 'next/router'

function Header() {
    const [search, setSearch] = useState(false)
    const router = useRouter()

    const searchOn = () => {
        search ? setSearch(false) : setSearch(true)
    }

    return (
        <div className="flex flex-col justify-between p-2 h-20 items-center px-20 md:flex-row">
            <div className="flex flex-col justify-start">
                <h1 className="font-bold text-3xl mb-3 md:ml-16">React Movie</h1>
            </div>

            <div className="flex w-64 justify-around mx-10 mt-2">
                <div className="flex items-top">
                    <HeaderIcon Icon={SearchIcon} label="Search" onClick={searchOn}/>
                    <div>
                        {search ? <Search /> : null }
                    </div>
                </div>
                <HeaderIcon Icon={HomeIcon} label="Home" onClick={() => router.push('/')}/>
                <HeaderIcon Icon={UserIcon} label="Profile"/>
            </div>
        </div>
    )
}

export default Header
