import {FiVolume1, FiYoutube} from 'react-icons/fi'
import {AiOutlineCloseCircle, AiOutlineDownload} from 'react-icons/ai'
import { DownloaderToolWrapper } from './downloaderWrappers'
import OptionButton from './OptionButton'

export default function({block}){
    return (
        <DownloaderToolWrapper>
                <input type="url" placeholder='www.youtube.com/watch?insertvideourl' className="inputLink" name="youtube-link" disabled={block ? true : false}/>
                <div className={"options" + (block ? " block" : "")}>
                    <div className="formatOptions">
                        <OptionButton group="teste" radioValue="rola" disabled={block ? true : false}>
                            <FiYoutube/>
                            <p>+</p>
                            <FiVolume1/>
                        </OptionButton>
                        <OptionButton group="teste" radioValue="broa" disabled={block ? true : false}>
                            <FiVolume1/>
                        </OptionButton>
                        <OptionButton group="teste" radioValue="tola" disabled={block ? true : false}>
                            <FiYoutube/>
                        </OptionButton>
                    </div>
                    <div className="qualityOptions">
                        <OptionButton group="teste2" radioValue="pito" disabled={block ? true : false}>LOW</OptionButton>
                        <OptionButton group="teste2" radioValue="baba" disabled={block ? true : false}>HIGH</OptionButton>
                    </div>
                </div>
        </DownloaderToolWrapper>
    )
}