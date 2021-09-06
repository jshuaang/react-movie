import {HomeIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'
import Image from 'next/image'

function Header() {
    return (
        <div className="flex flex-col justify-between p-2 h-20 items-center px-20 sm:flex-row">
            <div>
                <h1 className="font-bold text-3xl mb-3">React Movie</h1>
            </div>

            <div className="flex w-64 justify-around">
                <HeaderIcon Icon={HomeIcon} label="Home"/>
                <HeaderIcon Icon={SearchIcon} label="Search"/>
                <HeaderIcon Icon={UserIcon} label="Profile"/>
            </div>
        </div>
    )
}

export default Header
