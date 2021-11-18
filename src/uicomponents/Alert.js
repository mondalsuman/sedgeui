import { useEffect, useState } from "react"
import { CheckCircleIcon } from "@heroicons/react/outline"
import { ExclamationIcon } from "@heroicons/react/outline"
import { InformationCircleIcon } from "@heroicons/react/outline"
import { ExclamationCircleIcon } from "@heroicons/react/outline"
import AlertTitle from "./AlertTitle"


const Alert = ({ children, className, onClick, title }) => {
    const [intClassName, setIntClassName] = useState("alert")

    useEffect(() => {
        setIntClassName(intClassName + (title ? " flex flex-col" : "") + (className ? " " + className : ""))
    }, [])
    return (
        <div className={intClassName}>
            
                {title && intClassName.includes("success") ? <AlertTitle><span className="icon rounded-full mr-2"><CheckCircleIcon className="bg-transparent rounded-full text-current w-6 h-6"></CheckCircleIcon></span>{title}</AlertTitle>: intClassName.includes("success") ? <span className="icon rounded-full mr-2"><CheckCircleIcon className="bg-transparent rounded-full text-current w-6 h-6"></CheckCircleIcon></span> : ''}
                {title && intClassName.includes("error") ? <AlertTitle><span className="icon rounded-full mr-2"><ExclamationCircleIcon className="bg-trasparent rounded-full text-current w-6 h-6"></ExclamationCircleIcon></span>{title}</AlertTitle>: intClassName.includes("error") ? <span className="icon rounded-full mr-2"><ExclamationCircleIcon className="bg-transparent rounded-full text-current w-6 h-6"></ExclamationCircleIcon></span> : ''}
                {title && intClassName.includes("warning") ? <AlertTitle><span className="icon rounded-full mr-2"><ExclamationIcon className="bg-transparent text-current w-6 h-6"></ExclamationIcon></span>{title}</AlertTitle>: intClassName.includes("warning") ? <span className="icon rounded-full mr-2"><ExclamationIcon className="bg-transparent text-current w-6 h-6"></ExclamationIcon></span> : ''}
                {title && intClassName.includes("info") ? <AlertTitle><span className="icon rounded-full mr-2"><InformationCircleIcon className="bg-transparent rounded-full text-current w-6 h-6"></InformationCircleIcon></span>{title}</AlertTitle>: intClassName.includes("info") ? <span className="icon rounded-full mr-2"><InformationCircleIcon className="bg-transparent rounded-full text-current w-6 h-6"></InformationCircleIcon></span> : ''}
            
            {title ? <div className="ml-8">{children}</div> : children}
        </div>
    )
}

export default Alert