import { CheckIcon } from '@heroicons/react/solid'
import { PlusIcon } from '@heroicons/react/solid';
import Button from '../../uicomponents/Button';

const ButtonViewer = () => {
    return (
        <div className="font-roboto-300 m-16">
            <div>
                <h1 className="mx-5 text-4xl text-bold">Buttons</h1>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Default Button
                        </div>
                        <div className="flex justify-center items-center">
                            <Button>DEFAULT</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Contained Button
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained">Contained Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Outlined Button
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="outlined">Outlined Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Text Button
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="text">Text Button</Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Icon Button
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained">
                                <span><CheckIcon className="fill-current text-current w-4 h-4 mr-2" /></span>
                                <span>Icon Button</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Floating Action Button
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="fab">
                                <span><PlusIcon className="fill-current text-current w-4 h-4" /></span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5 theme-th1">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Themed Icon Button (Pink - Primary)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained">
                                <span><CheckIcon className="fill-current text-current w-4 h-4 mr-2" /></span>
                                <span>Icon Button</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5 theme-th2">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Themed Icon Button (teal - primary)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained">
                                <span><CheckIcon className="fill-current text-current w-4 h-4 mr-2" /></span>
                                <span>Icon Button</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5 container">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Block Button
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained block">
                                Block Button
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Contained Button (success)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained success">Contained Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Contained Button (error)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained error">Contained Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Contained Button (warning)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained warning">Contained Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Contained Button (info)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained info">Contained Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Outlined Button (success)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="outlined success">Outlined Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Outlined Button (error)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="outlined error">Outlined Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Outlined Button (warning)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="outlined warning">Outlined Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Outlined Button (info)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="outlined info">Outlined Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Text Button (success)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="text success">Text Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Text Button (error)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="text error">Text Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Text Button (warning)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="text warning">Text Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Text Button (info)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="text info">Text Button</Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Contained Button (success)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained success">
                                <span><CheckIcon className="fill-current text-current w-4 h-4 mr-2" /></span>
                                <span>Icon Button</span>
                            </Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Contained Button (error)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained error">
                                <span><CheckIcon className="fill-current text-current w-4 h-4 mr-2" /></span>
                                <span>Icon Button</span>
                            </Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Contained Button (warning)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained warning">
                                <span><CheckIcon className="fill-current text-current w-4 h-4 mr-2" /></span>
                                <span>Icon Button</span>
                            </Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Contained Button (info)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained info">
                                <span><CheckIcon className="fill-current text-current w-4 h-4 mr-2" /></span>
                                <span>Icon Button</span>
                            </Button>
                        </div>
                    </div>

                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            FAB (success)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="fab success">
                                <span><PlusIcon className="fill-current text-current w-4 h-4" /></span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            FAB (error)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="fab error">
                                <span><PlusIcon className="fill-current text-current w-4 h-4" /></span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            FAB (warning)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="fab warning">
                                <span><PlusIcon className="fill-current text-current w-4 h-4" /></span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            FAB (info)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="fab info">
                                <span><PlusIcon className="fill-current text-current w-4 h-4" /></span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5 container">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Block Button (success)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained block success">
                                Block Button
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5 container">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Block Button (error)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained block error">
                                Block Button
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5 container">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Block Button (warning)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained block warning">
                                Block Button
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="inline-block m-5 container">
                    <div className="flex flex-col">
                        <div className="m-5 p-2 flex justify-center items-center">
                            Block Button (info)
                        </div>
                        <div className="flex justify-center items-center">
                            <Button className="contained block info">
                                Block Button
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonViewer