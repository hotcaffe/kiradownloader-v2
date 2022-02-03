import {AiFillFolderAdd} from 'react-icons/ai'
import {SearchPathWrapper} from './styledWrappers'



export default function SearchPath(){
    
    function openDirectorySearch(){
        window.api.send.openDirectory()
    }

    return(
        <SearchPathWrapper onClick={e => openDirectorySearch()}>
            <AiFillFolderAdd/>
        </SearchPathWrapper>
    )
}