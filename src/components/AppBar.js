import React from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 text-lg hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="/component-viewer" class="block mt-4 lg:inline-block lg:mt-0 text-lg text-indigo-100 hover:text-white mr-4">
                        Components
                    </Link>
                    <Link to="/theme-builder" class="block mt-4 lg:inline-block lg:mt-0 text-lg text-indigo-100 hover:text-white">
                        Theme Builder
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default AppBar;