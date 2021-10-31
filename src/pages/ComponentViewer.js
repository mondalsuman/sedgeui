import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'

const styles = {
    viewer: {
      margin: '20px',
      display: 'inline-block'
    }
  }

const ComponentViewer = () => {
    return (
        <div>
            <h1 className="mx-5 text-4xl text-bold">Buttons</h1>
            <div style={styles.viewer}>
                <button className="btn btn-filled">Filled Button</button>
            </div>
            <div style={styles.viewer}>
                <button className="btn btn-outlined">Outlined Button</button>
            </div>
            <div style={styles.viewer}>
                <button className="btn btn-text">Text Button</button>
            </div>
            <div style={styles.viewer}>
                <button className="btn btn-filled btn-icon">
                    <span><CheckIcon className="fill-current text-current w-4 h-4 mr-2" /></span>
                    <span>Icon Button</span>
                </button>
            </div>
        </div>
    )
}

export default ComponentViewer;