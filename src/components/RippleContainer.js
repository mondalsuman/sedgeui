import React, { useState } from 'react'
import "../styles/ripple.css"

const RippleContainer = () => {
    const [rippleSpanStyles, setRippleSpanStyles] = useState([])

    const showRipple = (e) => {
        const rippleContainer = e.currentTarget;
    
        //const size = Math.max(rippleContainer.clientWidth, rippleContainer.clientHeight)
        //const x = e.clientX - rippleContainer.offsetLeft - size/2
        //const y = e.clientY - rippleContainer.offsetTop - size/2
        const offsetX = rippleContainer.offsetWidth
        const offsetY = rippleContainer.offsetHeight
        const pos = rippleContainer.getBoundingClientRect()
        //const parentPos = rippleContainer.parentElement.getBoundingClientRect()
    
        const size = Math.max(offsetX, offsetY)
        const x = e.clientX - pos.x - (size / 2)
        const y = e.clientY - pos.y - (size / 2)
    
        
        //console.log("Ripple circle", { pageY: e.pageY, posY: pos.y, parentPosY: parentPos.y, offsetY, y })
        const spanStyles = {style: { top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px', backgroundColor: '#000', opacity: '0.5' }, createdOn: new Date()};
        setRippleSpanStyles([...rippleSpanStyles, spanStyles])
    
      }
    
      const clearRipple = () => {
        let newStyles = []
        const dt = new Date()
        rippleSpanStyles.map((rpStyle)=>{
          const diff = Math.abs(dt - rpStyle.createdOn)
          if(diff < 3000)
            newStyles.push(rpStyle)
        })
        setRippleSpanStyles(newStyles)
      }
    
      const cleanUp = (clearRipple, delay) => {
        //if(rippleSpanStyles && rippleSpanStyles.length > 20){
          return () => {
            let bounce
            clearTimeout(bounce);
            bounce = setTimeout(() => {
              clearRipple();
            }, delay);
          }
        //}
      }
    
      const renderRippleSpan = () => {
        if (rippleSpanStyles && rippleSpanStyles.length > 0) {
          return (
            rippleSpanStyles.map((style, index) => {
              return <span key={'spanCount_' + index} className="inner" style={style.style}></span>
            })
          )
        } else {
          return null;
        }
      }


    return (
        <div className="rippleContainer" onMouseDown={showRipple} onMouseUp={cleanUp(clearRipple, 3000)}>
            {renderRippleSpan()}
        </div>
    )
}

export default RippleContainer