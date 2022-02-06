import {AiFillFolderAdd} from 'react-icons/ai'
import {SearchPathWrapper} from './styledWrappers'



export default function SearchPath({disabled}){
    
    function openDirectorySearch(){
        window.api.send.openDirectory()
    }

    return(
        <SearchPathWrapper onClick={e => openDirectorySearch()} disabled={disabled}>
            <AiFillFolderAdd/>
        </SearchPathWrapper>
    )
}