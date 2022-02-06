import { useContext, useEffect, useState } from 'react'
import { FormaterToolWrapper } from './formaterWrapper'
import FormatContext from '../../contexts/FormatContext'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import {AiFillFileAdd} from 'react-icons/ai'
import extensions from './fileExtensions'

export default function({block}){
    const {formatData, setFormatData} = useContext(FormatContext)
    const [showDropdown, setShowDropdown] = useState(false)
    const [fileExtensions, setFileExtensions] = useState([''])

    function checkFileType(fileExtension){
        extensions.image.filter(extension => {
            const dotExtension = '.' + extension 
            if(dotExtension == fileExtension){
                setFileExtensions(extensions.image)
            }
        })
        extensions.media.filter(extension => {
            const dotExtension = '.' + extension
            if(dotExtension == fileExtension){
                setFileExtensions(extensions.media)
            }
        })
    }

    function dropdownHandler(){
        if(fileExtensions[0]){
            if(showDropdown){
                setShowDropdown(false)
            }else{
                setShowDropdown(true)
            }
        }
    }

    function mountFileExtensionList(extension){
        return <p key={extension} value={extension}>{extension}</p>
    }

    function openFileSearch(){
        window.api.send.openFile()
    }

    function setFormat(format){
        dropdownHandler()
        setLocalStorage({...formatData, format: format})
    }

    function setLocalStorage(data){
        const newFormatData = {...formatData, ...data}
        localStorage.setItem('kiradownloader_formater_presets', JSON.stringify(newFormatData))
        setFormatData(newFormatData)
    }


    window.api.on.waitFilePath('file-path', (event, file) => {
        checkFileType(file.fileExtension)
        setLocalStorage({...formatData, file: file.filePath, fileName: file.fileName, format: ''})
    })

    window.api.on.waitSearchPath('folder-path', (event, folderPath) => {
        setLocalStorage({path: folderPath})
    })

    useEffect(() => {
        const local = localStorage.getItem('kiradownloader_formater_presets')
        if(local){
            const localExtension = '.' + JSON.parse(local).format
            checkFileType(localExtension)
        }
    }, [])

    return(
        <FormaterToolWrapper>
            <div className={"input-file" + (block ? ' disabled' : '')} onClick={e => openFileSearch()}>
                <span>
                    {formatData.fileName ? formatData.fileName : <AiFillFileAdd/>}
                </span>
            </div>
            <div className={"dropdown" + (showDropdown ? ' active' : '') + (formatData.format ? ' selected' : '') + (block ? ' disabled' : '')}>
                <div className="separator"/>
                <div className="dropdown-btn" onClick={e => dropdownHandler()}>
                    <div/>
                    <p>{formatData.format ? formatData.format : "CONVERT TO"}</p>
                    {showDropdown ? <FiChevronUp/> : <FiChevronDown/>}
                </div>
                <div name="format" className="dropdown-input" onClick={e => setFormat(e.target.attributes.value.value)}>
                    {fileExtensions.map(extension => {
                        return mountFileExtensionList(extension)
                    })}
                </div>
            </div>
        </FormaterToolWrapper>
    )
}