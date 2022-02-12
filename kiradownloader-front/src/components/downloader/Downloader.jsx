import { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import Container from '../default/Container'
import DownloaderTool from './DownloaderTool'
import LaunchButton from '../default/LaunchButton'
import { AiOutlineDownload } from 'react-icons/ai'
import DownloadContext, { downloadDataContext } from '../../contexts/DownloadContext'

export default function () {
  const { globals, setGlobals } = useContext(GlobalContext)
  const [downloadData, setDownloadData] = useState(getLocalStorage())

  const [loading, setLoading] = useState('')

  let oldProgressValue = 0

  function getLocalStorage() {
    const local = JSON.parse(localStorage.getItem('kiradownloader_downloader_presets'))
    if (!local) return downloadDataContext
    return local
  }

  function manageDownload() {
    if (globals.block) {
      window.api.download.downloadCancel('abort')
    } else {
      if (downloadData.media === 'video') {
        window.api.download.downloadVideo(downloadData)
      } else if (downloadData.media === 'audio') {
        window.api.download.downloadAudio(downloadData)
      } else {
        window.api.download.downloadContent(downloadData)
      }

      window.api.on.waitDownloadProgress('download-progress', (event, progress) => {
        if (progress == 'Aborted') {
          setLoading('Download Aborted!')
          return 0
        }
        if (oldProgressValue != progress) {
          oldProgressValue = progress
          setLoading(progress)
          if (progress == 'Done!') {
            setGlobals({ ...globals, block: false })
          }
        }
      })
    }

  }

  return (
    <DownloadContext.Provider value={{ downloadData: downloadData, setDownloadData: setDownloadData }}>
      <Container tool="downloader" loadingPercentage={loading} block={globals.block}>
        <DownloaderTool block={globals.block} />
        <LaunchButton block={globals.block} toolHandler={manageDownload}>
          <AiOutlineDownload />
        </LaunchButton>
      </Container>
    </DownloadContext.Provider>
  )
}