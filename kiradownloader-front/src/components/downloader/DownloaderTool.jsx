import react from 'react'
import {FiVolume1, FiYoutube} from 'react-icons/fi'
import {AiOutlineCloseCircle, AiOutlineDownload} from 'react-icons/ai'

import { DownloaderToolWrapper } from './downloaderWrappers'
import OptionButton from './OptionButton'

export default function(){
    //children, radioValue, group, status
    return (
        <DownloaderToolWrapper>
                <input type="url" className="inputLink" name="youtube-link"/>
                <div className="options">
                    <div className="formatOptions">
                        <OptionButton group="teste" radioValue="rola">
                            <FiYoutube/>
                            <p>+</p>
                            <FiVolume1/>
                        </OptionButton>
                        <OptionButton group="teste" radioValue="broa">
                            <FiVolume1/>
                        </OptionButton>
                        <OptionButton group="teste" radioValue="tola">
                            <FiYoutube/>
                        </OptionButton>
                    </div>
                    <div className="qualityOptions">
                        <OptionButton group="teste2" radioValue="pito">LOW</OptionButton>
                        <OptionButton group="teste2" radioValue="baba">HIGH</OptionButton>
                    </div>
                </div>
        </DownloaderToolWrapper>
    )
}