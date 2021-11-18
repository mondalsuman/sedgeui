import React from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-purple-500 p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-purple-100 text-lg hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="/component-viewer" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-purple-100 hover:text-white mr-4">
                        Components
                    </Link>
                    <Link to="/theme-builder" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-purple-100 hover:text-white mr-4">
                        Theme Builder
                    </Link>
                    <Link to="/component-tester" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-purple-100 hover:text-white">
                        Component Tester
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default AppBar;