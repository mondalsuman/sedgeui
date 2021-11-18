const { useState, useEffect } = require("react")


const Avatar = ({ children, src, alt, className }) => {
    const [intClassName, setIntClassName] = useState("flex bg-gray-200 overflow-hidden w-10 h-10 justify-center items-center")

    useEffect(() => {
        setIntClassName(intClassName + (className ? " " + className : ""))
    }, [])
    return (
        <span className={intClassName}>{src && alt ? <img src={src} alt={alt} />: children}</span>
    )
}

export default Avatar