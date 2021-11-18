import { useEffect, useState } from "react"



const AlertTitle = ({children, className})=> {
    const [intClassName, setIntClassName] = useState("inline-flex font-extrabold text-2xl h-2 mb-6 items-center")

    useEffect(() => {
        setIntClassName(intClassName + (className ? " " + className : ""))
    }, [])
    return (
        <div className={intClassName}>
            {children}
        </div>
    )
}

export default AlertTitle