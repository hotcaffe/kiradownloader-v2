import react from 'react'
import { DownloaderToolWrapper } from './downloaderStyledWrappers'
import OptionButton from './OptionButton'

export default function(){
    //children, radioValue, group, status
    return (
        <DownloaderToolWrapper>
                <input type="url" className="inputLink" name="youtube-link"/>
                <div className="options">
                    <div className="formatOptions">
                        <OptionButton group="teste" radioValue="rola" status="disabled">S + F</OptionButton>
                        <OptionButton group="teste" radioValue="broa">S + A</OptionButton>
                        <OptionButton group="teste" radioValue="tola">S + A</OptionButton>
                    </div>
                    <div className="qualityOptions">
                        <OptionButton group="teste2" radioValue="pito">S + F</OptionButton>
                        <OptionButton group="teste2" radioValue="baba">S + A</OptionButton>
                    </div>
                </div>
        </DownloaderToolWrapper>
    )
}