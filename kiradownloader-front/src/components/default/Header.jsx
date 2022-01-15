import { HeaderWrapper } from "./styledWrappers";
import {AiOutlineMinus, AiOutlineClose} from 'react-icons/ai'

export default function(){
    return(
        <HeaderWrapper>
            <div/>
            <p>@kiraDownloader v2</p>
            <div>
                <AiOutlineMinus className="minimize-btn"/>
                <AiOutlineClose className="close-btn"/>
            </div>
        </HeaderWrapper>
    )
}