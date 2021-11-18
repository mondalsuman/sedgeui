import React from 'react'
import Button from '../uicomponents/Button'

const ComponentTester = ()=> {
    const classes={
        w_50: {
            width: "50rem"
        },
        text_color_red:{
            color: 'red'
        },
        bg_color_gray: {
            backgroudColor: 'gray'
        }
    }

    return (
        <div>
            <button style={classes.text_color_red}>Test Button</button>
        </div>
    )
}

export default ComponentTester