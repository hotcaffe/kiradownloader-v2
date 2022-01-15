import { useContext } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import {SideMenuWrapper} from './styledWrappers'
// import {AiOutlineDownload} from 'react-icons/ai'
import {AiFillPicture, AiOutlineDownload} from 'react-icons/ai'

export default function({tool, disabled}){
    const {globals, setGlobals} = useContext(GlobalContext)

    function changeTab(tab){
        setGlobals({...globals, tab: tab})
    }

    return(
        <SideMenuWrapper disabled={disabled}>
            <div className={"downloaderNavigator" + (tool == "downloader" ? " selected" : "")} onClick={e => changeTab('downloader')}>
                <AiOutlineDownload/>
            </div>
            <div className={"formaterNavigator" + (tool == "formater" ? " selected" : "")} onClick={e => changeTab('formater')}>
                <AiFillPicture/>
            </div>
        </SideMenuWrapper>
    )
}