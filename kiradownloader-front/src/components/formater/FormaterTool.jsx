import react, { useState } from 'react'
import { FormaterToolWrapper } from './formaterWrapper'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import {AiFillFileAdd} from 'react-icons/ai'

export default function(){
    const [showDropdown, setShowDropdown] = useState(false)

    function dropdownHandler(){
        if(showDropdown){
            setShowDropdown(false)
        }else{
            setShowDropdown(true)
        }
    }

    return(
        <FormaterToolWrapper>
            <div className="input-file">
                <AiFillFileAdd/>
            </div>
            <div className={"dropdown" + (showDropdown ? ' active' : '')}>
                <div className="separator"/>
                <div className="dropdown-btn" onClick={e => dropdownHandler()}>
                    <div/>
                    <p>CONVERT TO</p>
                    {showDropdown ? <FiChevronUp/> : <FiChevronDown/>}
                </div>
                <div name="format" className="dropdown-input">
                    <p value="MP3">AVI</p>
                    <p value="MP3">MP3</p>
                    <p value="MP3">MP4</p>
                    <p value="MP3">WAV</p>
                    <p value="MP3">WMV</p>
                </div>
            </div>
        </FormaterToolWrapper>
    )
}