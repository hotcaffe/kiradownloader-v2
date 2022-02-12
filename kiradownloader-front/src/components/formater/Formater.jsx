import { useContext, useState } from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import Container from '../default/Container'
import FormatContext, { formatDataContext } from '../../contexts/FormatContext'
import FormaterTool from './FormaterTool'
import { AiFillPicture } from 'react-icons/ai'
import LaunchButton from '../default/LaunchButton'

export default function () {
  const { globals, setGlobals } = useContext(GlobalContext)
  const [formatData, setFormatData] = useState(getLocalStorage())
  const [loading, setLoading] = useState('')

  function getLocalStorage() {
    const local = JSON.parse(localStorage.getItem('kiradownloader_formater_presets'))
    if (!local) return formatDataContext
    return local
  }

  function manageFormating() {
    if (globals.block) {
      window.api.format.formatCancel('abort')
    } else {
      window.api.format.formatMedia(formatData)
      window.api.on.waitFormatProgress('format-progress', (event, progress) => {
        if (progress == 'Aborted') {
          setLoading('Formatation Aborted!')
          return 0
        }
        if (progress == 'Done!') {
          setLoading(progress)
          setGlobals({ ...globals, block: false })
          return 0
        }
        if (progress) {
          setLoading(progress)
        }
      })
    }
  }

  return (
    <FormatContext.Provider value={{ formatData: formatData, setFormatData: setFormatData }}>
      <Container tool="formater" loadingPercentage={loading} block={globals.block}>
        <FormaterTool block={globals.block} />
        <LaunchButton block={globals.block} toolHandler={manageFormating}>
          <AiFillPicture />
        </LaunchButton>
      </Container>
    </FormatContext.Provider>
  )
}