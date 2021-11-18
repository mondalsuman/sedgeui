import React from 'react'
import { useHistory } from 'react-router';
import Button from '../uicomponents/Button';

const Home = () => {
    const history = useHistory()
    return (
        <div>
            <div className="min-h-screen min-w-full flex flex-col justify-center items-center">
                <div className="text-4xl font-extrabold">Home page (under construction)</div>
                <div className="text-4xl font-extrabold"><span>Go to </span><Button onClick={()=> history.push("/component-viewer")} className="text text-4xl font-extrabold">Components</Button><span>instead to see the progress</span></div>
            </div>
        </div>
    )
}

export default Home;