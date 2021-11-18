import { ColorSwatchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import ColorPickerPallete from '../components/ColorPickerPallete';

const ThemeBuilder = () => {
    const [palletPickerOpened, setPalletPickerOpened] = useState(false)
    const [selectedColor, setSelectedColor] = useState(null)

    const handleColorSelection = (selColor) => {
        setPalletPickerOpened(false);
        setSelectedColor(selColor)
    }

    return (
        <div className="">
            <div className="inline-flex relative">
                <input className="shadow appearance-none border rounded w-100 py-2 px-3 m-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" placeholder="pick a color" 
                value={selectedColor ? selectedColor.selectedVariant.backgroundColor : ''} />
                <ColorSwatchIcon onClick={()=>setPalletPickerOpened(true)} className="w-6 h-6 mx-6 mt-6 text-indigo-500 absolute top-0 right-0 cursor-pointer" />
            </div>
            
            <div className="shadow-2xl z-50">
                <ColorPickerPallete open={palletPickerOpened} 
                onClose={()=> setPalletPickerOpened(false)}
                onSelection={handleColorSelection} />
            </div>
        </div>
    )
}

export default ThemeBuilder;