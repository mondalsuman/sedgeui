import { XIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react'
import palletColors from '../Utilities/PalletColors';


const colorSuffixes = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']



const ColorPickerPallete = ({ open = false, onClose, onSelection }) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(open)
    }, [open, setVisible])

    const handleClose = (e) => {
        e.preventDefault()
        if (onClose) {
            onClose()
            setVisible(false)
        }
    }

    const handleSelection = (e, selColor) => {
        e.preventDefault()
        if (onSelection) {

            setVisible(false)
            onSelection(selColor)
        }
    }

    return (
        <>
            {visible ? <div className="p-5">
                <div>
                    <XIcon onClick={handleClose} className="float-right cursor-pointer stroke-0 w-6 h-6 m-4 text-indigo-500" />
                </div>
                <div className="clear-right flex flex-col">

                    <div className="flex flex-row">
                        <div className="flex-none w-20 h-5 m-1 mb-3 uppercase"></div>
                        {colorSuffixes.map((cs, csIndex) => <div key={csIndex} className="flex-none text-indigo-500 w-20 h-5 m-1 p-2 text-center">{cs}
                        </div>)}
                    </div>
                    {palletColors.map((c, index) => <div key={index} className="flex flex-row">
                        <div className="flex-none text-indigo-500 w-20 h-5 m-1 uppercase">{c.family}</div>
                        {c.variants.map((v, vIndex) => <div onClick={(e) => handleSelection(e, { family: c.family, selectedVariant: v })} key={vIndex} className={`flex-none shadow-lg w-20 h-5 m-1 p-2 cursor-pointer ${v.backgroundColor} hover:shadow-2xl`}>
                        </div>)}
                    </div>)}
                </div>
            </div> : ''}
        </>
    )
}

export default ColorPickerPallete;