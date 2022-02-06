import {useContext, useState} from 'react'
import GlobalContext from '../../contexts/GlobalContext'
import Container from '../default/Container'
import FormatContext, {formatDataContext} from '../../contexts/FormatContext'
import FormaterTool from './FormaterTool'
import {AiFillPicture} from 'react-icons/ai'
import LaunchButton from '../default/LaunchButton'

export default function(){
    const {globals, setGlobals} = useContext(GlobalContext)
    const [formatData, setFormatData] = useState(getLocalStorage())

    function getLocalStorage(){
      const local = JSON.parse(localStorage.getItem('kiradownloader_formater_presets'))
      if(!local) return formatDataContext
      return local
    }

    function manageFormating(){
      if(globals.block){
        
      }else{
        console.log(formatData)
      }
    }

    return(
      <FormatContext.Provider value={{formatData: formatData, setFormatData: setFormatData}}>
        <Container tool="formater" block={globals.block}>
          <FormaterTool block={globals.block}/>
          <LaunchButton block={globals.block} toolHandler={manageFormating}>
            <AiFillPicture/>
          </LaunchButton>
        </Container>
      </FormatContext.Provider>
    )
}