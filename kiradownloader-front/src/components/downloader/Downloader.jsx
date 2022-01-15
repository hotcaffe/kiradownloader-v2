import react from 'react'
import Container from '../default/Container'
import DownloaderTool from './DownloaderTool'
import LaunchButton from '../default/LaunchButton'
import {AiOutlineDownload} from 'react-icons/ai'

export default function(){
    return(
        <Container tool="downloader">
          <DownloaderTool/>
          <LaunchButton>
            <AiOutlineDownload/>
          </LaunchButton>
        </Container>
    )
}