import { ThemeProvider } from 'styled-components'
import GlobalContext, {global} from './contexts/GlobalContext';
import Downloader from './components/downloader/Downloader'
import Formater from './components/formater/Formater';
import { useState } from 'react';

function App() {
  const [globalContextState, setGlobalContextState] = useState(global)

  return (
    <GlobalContext.Provider value={{globals: globalContextState, setGlobals: setGlobalContextState}}>
      <ThemeProvider theme={globalContextState.theme}>
        <div className="App">
          {globalContextState.tab == 'downloader' ? <Downloader/> : <Formater/>}
        </div>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
