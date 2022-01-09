import react from 'react'
import {SideMenuWrapper} from './styledWrappers'
import {GrGallery} from 'react-icons/gr'
import {AiOutlineDownload} from 'react-icons/ai'

export default function(){
    return(
        <SideMenuWrapper>
            <div className="downloaderNavigator selected">
                <AiOutlineDownload/>
            </div>
            <div className="formaterNavigator">
                <GrGallery/>
            </div>
        </SideMenuWrapper>
    )
}