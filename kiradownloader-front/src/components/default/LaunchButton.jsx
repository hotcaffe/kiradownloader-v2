import { useContext } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import {LaunchButtonWrapper} from './styledWrappers'
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function({children, toolHandler, block}){
    const {globals, setGlobals} = useContext(GlobalContext)

    function blockNavigation(){
        if(globals.block){
            setGlobals({...globals, block: false})
        }else{
            setGlobals({...globals, block: true})
        }
    }

    return (
        <LaunchButtonWrapper className={block ? "block" : ""} onClick={e => {
            toolHandler()
            blockNavigation()
        }}>
            {block ? <AiOutlineCloseCircle/> : children}
        </LaunchButtonWrapper>
    )
}
