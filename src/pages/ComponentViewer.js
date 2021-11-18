import { ArrowSmLeftIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import { Switch, Route, useRouteMatch, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import AlertViewer from '../components/viewers/AlertViewer';
import AvatarViewer from '../components/viewers/AvatarViewer';
import ButtonViewer from '../components/viewers/ButtonViewer';




const ComponentViewer = () => {
    const rm = useLocation()
    const { path, url } = useRouteMatch()
    const [selectedLink, setSelectedLink] = useState("alerts")
    console.log("path", path)
    console.log("rm", rm)
    return (
        <div className="relative min-h-screen flex">
            <div className="flex flex-col bg-gray-200 border-gray-300 shadow-el-4 text-purple-500 w-64">
                <label className="block text-2xl font-extrabold my-3 mx-5">Components</label>
                <Link to={`${path}`} className={selectedLink === "alerts" ?
                    'inline-flex items-center text-xl text-teal-500 mx-14 my-2 underline font-extrabold uppercase tracking-wider stroke-current stroke-2 hover:text-teal-800 hover:font-semibold' : 'text-lg mx-14 my-2 hover:text-purple-800 hover:font-semibold'}
                    onClick={() => setSelectedLink("alerts")}>
                    <span>Alerts</span>
                    {selectedLink === "alerts" ? <ArrowSmLeftIcon className="fill-current text-current w-4 h-4 ml-2" /> : ''}
                </Link>
                <Link to={`${path}/avatars`} className={selectedLink === "Avatars" ?
                    'inline-flex items-center text-xl text-teal-500 mx-14 my-2 underline font-extrabold uppercase tracking-wider stroke-current stroke-2 hover:text-teal-800 hover:font-semibold' : 'text-lg mx-14 my-2 hover:text-purple-800 hover:font-semibold'}
                    onClick={() => setSelectedLink("Avatars")}>
                    <span>Avatars</span>
                    {selectedLink === "Avatars" ? <ArrowSmLeftIcon className="fill-current text-current w-4 h-4 ml-2" /> : ''}
                </Link>
                <Link to={`${path}/buttons`} className={selectedLink === "Buttons" ?
                    'inline-flex items-center text-xl text-teal-500 mx-14 my-2 underline font-extrabold uppercase tracking-wider stroke-current stroke-2 hover:text-teal-800 hover:font-semibold' : 'text-lg mx-14 my-2 hover:text-purple-800 hover:font-semibold'}
                    onClick={() => setSelectedLink("Buttons")}>
                    <span>Buttons</span>
                    {selectedLink === "Buttons" ? <ArrowSmLeftIcon className="fill-current text-current w-4 h-4 ml-2" /> : ''}
                </Link>
            </div>
            <div className="flex-1">
                <Switch>
                    <Route exact path={path} component={AlertViewer} />
                    <Route exact path={`${path}/avatars`} component={AvatarViewer} />
                    <Route exact path={`${path}/buttons`} component={ButtonViewer} />
                </Switch>
            </div>

        </ div>
    )
}

export default ComponentViewer;