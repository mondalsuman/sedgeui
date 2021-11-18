import { HomeIcon } from "@heroicons/react/outline"
import { XCircleIcon } from "@heroicons/react/outline"
import { FilterIcon } from "@heroicons/react/outline"
import Avatar from "../../uicomponents/Avatar"



const AvatarViewer = () => {
    return (
        <div className="font-roboto-300 m-16">
            <div>
                <h1 className="mx-5 text-4xl text-bold">Avatars</h1>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Image Avatars
                        </div>
                        <div className="inline-flex justify-center items-center">
                            <Avatar src="https://i.pravatar.cc/100?u=a042581frfgg4e29026704d" alt="Jude Doe" className="bg-purple-500 rounded-full w-14 h-14 mr-5" />
                            <Avatar src="https://i.pravatar.cc/100?u=a04t2fg5ds2i0f26704d" alt="Jane Doe" className="bg-purple-500 rounded-full w-14 h-14 mr-5" />
                            <Avatar src="https://i.pravatar.cc/100?u=a04t2fg5sf2i0mmf26704d" alt="John Doe" className="bg-purple-500 rounded-full w-14 h-14" />
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Letter Avatars
                        </div>
                        <div className="inline-flex justify-center items-center">
                            <Avatar className="bg-red-400 rounded-full w-14 h-14 mr-5 text-white">J</Avatar>
                            <Avatar className="bg-purple-400 rounded-full w-14 h-14 mr-5 text-white">D</Avatar>
                            <Avatar className="bg-green-400 rounded-full w-14 h-14 text-white">JD</Avatar>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Icon Avatars
                        </div>
                        <div className="inline-flex justify-center items-center">
                            <Avatar className="bg-red-400 rounded-full w-14 h-14 mr-5">
                                <HomeIcon className="m-1 text-white" />
                            </Avatar>
                            <Avatar className="bg-purple-400 rounded-full w-14 h-14 mr-5">
                                <XCircleIcon className="m-1 text-white" />
                            </Avatar>
                            <Avatar className="bg-green-400 rounded-full w-14 h-14">
                                <FilterIcon className="m-1 text-white" />
                            </Avatar>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Square Avatars
                        </div>
                        <div className="inline-flex justify-center items-center">
                            <Avatar className="bg-red-400 w-14 h-14 mr-5">
                                <HomeIcon className="m-1 text-white" />
                            </Avatar>
                            <Avatar className="bg-purple-400 w-14 h-14 mr-5 text-white">
                                RJ
                            </Avatar>
                            <Avatar className="bg-green-400 w-14 h-14">
                                <FilterIcon className="m-1 text-white" />
                            </Avatar>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Semi rounded Avatars
                        </div>
                        <div className="inline-flex justify-center items-center">
                            <Avatar className="bg-red-400 rounded-xl w-14 h-14 mr-5">
                                <HomeIcon className="m-1 text-white" />
                            </Avatar>
                            <Avatar className="bg-purple-400 rounded-lg w-14 h-14 mr-5 text-white">
                                RJ
                            </Avatar>
                            <Avatar className="bg-green-400 rounded-md w-14 h-14">
                                <FilterIcon className="m-1 text-white" />
                            </Avatar>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AvatarViewer