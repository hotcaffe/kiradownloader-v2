import { useContext } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import Container from '../default/Container'
import DownloaderTool from './DownloaderTool'
import LaunchButton from '../default/LaunchButton'
import {AiOutlineDownload} from 'react-icons/ai'

export default function(){
    const {globals} = useContext(GlobalContext)

    return(
        <Container tool="downloader" block={globals.block}>
          <DownloaderTool block={globals.block}/>
          <LaunchButton block={globals.block}>
            <AiOutlineDownload/>
          </LaunchButton>
        </Container>
    )
}