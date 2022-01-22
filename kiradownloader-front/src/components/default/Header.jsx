import { HeaderWrapper } from "./styledWrappers";
import {AiOutlineMinus, AiOutlineClose} from 'react-icons/ai'

export default function(){
    return(
        <HeaderWrapper>
            <div/>
            <p>@kiraDownloader v2</p>
            <div>
                <AiOutlineMinus 
                    className="minimize-btn"
                    onClick={e => window.api.send.minimizeWindow('minimize application window')}
                />
                <AiOutlineClose 
                    className="close-btn" 
                    onClick={e => window.api.send.closeWindow('close application window')}
                />
            </div>
        </HeaderWrapper>
    )
}