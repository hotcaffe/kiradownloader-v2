import Downloader from './components/downloader/Downloader'
import Formater from './components/formater/Formater';
import Update from './components/update/Update';
import GlobalContext, {global} from './contexts/GlobalContext';
import { ThemeProvider } from 'styled-components'
import { useState } from 'react';

function App() {
  const [globalContextState, setGlobalContextState] = useState(global)
  const [updater, setUpdater] = useState(true)
  const [loading, setLoading] = useState(true)


  window.api.on.finishUpdating('finish-updating', () => {  
    setUpdater(false)
    setLoading(false)
  })

  window.api.on.waitUpdate('update', () => {
    setUpdater(true)
    setLoading(false)
  })

  if(updater){
    return (
      <ThemeProvider theme={globalContextState.theme}>
        <Update/>
      </ThemeProvider>
    )
  }else if(!updater && !loading){
    return (
      <GlobalContext.Provider value={{globals: globalContextState, setGlobals: setGlobalContextState}}>
        <ThemeProvider theme={globalContextState.theme}>
          <div className="App">
            {globalContextState.tab == 'downloader' ? <Downloader/> : <Formater/>}
          </div>
        </ThemeProvider>
      </GlobalContext.Provider>
    )
  }else{
    return (
      <></>
    )
  }

}

export default App;
