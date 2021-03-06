import { FiVolume1, FiYoutube } from 'react-icons/fi'
import { DownloaderToolWrapper } from './downloaderWrappers'
import DownloadContext from '../../contexts/DownloadContext'
import OptionButton from './OptionButton'
import { useContext} from 'react'


export default function ({ block }) {
    const {downloadData, setDownloadData} = useContext(DownloadContext)

    function setLocalStorage(data){
        const newDownloadData = {...downloadData, ...data}
        localStorage.setItem('kiradownloader_downloader_presets', JSON.stringify(newDownloadData))
        setDownloadData(newDownloadData)
    }

    function changeDownloadData(set, value) {
        if (set === 'url') {
            setLocalStorage({url: value})
        } else if (set == 'media') {
            setLocalStorage({media: value})
        } else if (set === 'quality') {
            setLocalStorage({quality: value})
        }
    }

    window.api.on.waitSearchPath('folder-path', (event, folderPath) => {
        setLocalStorage({path: folderPath})
    })

    return (
        <DownloaderToolWrapper>
            <input type="url" placeholder='www.youtube.com/watch?insertvideourl' className="inputLink" name="youtube-link" disabled={block ? true : false} onChange={e => changeDownloadData('url', e.target.value)} value={downloadData ? downloadData.url : ''}/>
            <div className={"options" + (block ? " block" : "")}>
                <div className="formatOptions">
                    <OptionButton group="media-options" radioValue="both" disabled={block ? true : false} onClick={e => changeDownloadData('media', e.target.value)}>
                        <FiYoutube />
                        <p>+</p>
                        <FiVolume1 />
                    </OptionButton>
                    <OptionButton group="media-options" radioValue="audio" disabled={block ? true : false} onClick={e => changeDownloadData('media', e.target.value)}>
                        <FiVolume1 />
                    </OptionButton>
                    <OptionButton group="media-options" radioValue="video" disabled={block ? true : false} onClick={e => changeDownloadData('media', e.target.value)}>
                        <FiYoutube />
                    </OptionButton>
                </div>
                <div className="qualityOptions">
                    <OptionButton group="quality-options" radioValue="low" disabled={block ? true : false} onClick={e => changeDownloadData('quality', e.target.value)}>LOW</OptionButton>
                    <OptionButton group="quality-options" radioValue="high" disabled={block ? true : false} onClick={e => changeDownloadData('quality', e.target.value)}>HIGH</OptionButton>
                </div>
            </div>
        </DownloaderToolWrapper>
    )
}