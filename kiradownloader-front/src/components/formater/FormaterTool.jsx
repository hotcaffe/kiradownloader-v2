import { useState } from 'react'
import { FormaterToolWrapper } from './formaterWrapper'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import {AiFillFileAdd} from 'react-icons/ai'

export default function({block}){
    const [showDropdown, setShowDropdown] = useState(false)
    const [data, setData] = useState({
        file: '',
        format: false
    })

    function dropdownHandler(){
        if(showDropdown){
            setShowDropdown(false)
        }else{
            setShowDropdown(true)
        }
    }

    function setFormat(format){
        dropdownHandler()
        setData({...data, format: format})
    }

    return(
        <FormaterToolWrapper>
            <div className={"input-file" + (block ? ' disabled' : '')}>
                <AiFillFileAdd/>
            </div>
            <div className={"dropdown" + (showDropdown ? ' active' : '') + (data.format ? ' selected' : '') + (block ? ' disabled' : '')}>
                <div className="separator"/>
                <div className="dropdown-btn" onClick={e => dropdownHandler()}>
                    <div/>
                    <p>{data.format ? data.format : "CONVERT TO"}</p>
                    {showDropdown ? <FiChevronUp/> : <FiChevronDown/>}
                </div>
                <div name="format" className="dropdown-input" onClick={e => setFormat(e.target.attributes.value.value)}>
                    <p value="AVI">AVI</p>
                    <p value="MP3">MP3</p>
                    <p value="MP4">MP4</p>
                    <p value="WAV">WAV</p>
                    <p value="WMV">WMV</p>
                </div>
            </div>
        </FormaterToolWrapper>
    )
}