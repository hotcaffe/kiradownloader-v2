import { useContext, useState } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import { Container } from '../default/Container'
import DownloaderTool from './DownloaderTool'
import LaunchButton from '../default/LaunchButton'
import { AiOutlineDownload } from 'react-icons/ai'

export default function () {
  const { globals } = useContext(GlobalContext)

  const [loading, setLoading] = useState('')

  const downloadData = {
    url: 'https://youtu.be/eJO5HU_7_1w',
    path: 'F:/FFOutput',
    options: {
      quality: 'high',
      media: 'video'
    }
  }

  let oldProgressValue = 0

  function manageDownload() {
    if (downloadData.options.media === 'video') {
      window.api.download.downloadVideo(downloadData)
    } else if (downloadData.options.media === 'audio') {
      window.api.download.downloadAudio(downloadData)
    } else {
      window.api.download.downloadContent(downloadData)
    }

    window.api.on.waitProgress('download-progress', (event, progress) => {
      if (oldProgressValue != progress) {
        oldProgressValue = progress
        setLoading(progress)
      }
    })

  }

  return (
    <Container tool="downloader" loadingPercentage={loading} block={globals.block}>
      <DownloaderTool block={globals.block} />
      <LaunchButton block={globals.block} download={manageDownload}>
        <AiOutlineDownload/>
      </LaunchButton>
    </Container>
  )
}