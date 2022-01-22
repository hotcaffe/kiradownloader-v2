import { useContext, useState } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import Container from '../default/Container'
import DownloaderTool from './DownloaderTool'
import LaunchButton from '../default/LaunchButton'
import {AiOutlineDownload} from 'react-icons/ai'

export default function(){
    const {globals} = useContext(GlobalContext)

    const [loading, setLoading] = useState('')

    function updateLoading(progress){
      const update = progress > loading + 5
      if(parseFloat(progress) && update){
        setLoading(progress)
      }
    }

    const test = {
      url: 'https://youtu.be/eJO5HU_7_1w',
      quality: 'high'
    }

    return(
        <Container tool="downloader" loadingPercentage={loading} block={globals.block}>
          <DownloaderTool block={globals.block}/>
          <LaunchButton block={globals.block}>
            <AiOutlineDownload onClick={e => {
              console.log('a')
              window.api.download.downloadContent(test)
              window.api.on.waitProgress('download-progress', (event, data) => {
                console.log(data)
                // updateLoading(data)
              })
            }}/>
          </LaunchButton>
        </Container>
    )
}