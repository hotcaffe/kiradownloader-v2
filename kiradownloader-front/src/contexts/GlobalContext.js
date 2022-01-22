import { createContext } from "react"
import { dark, light } from '../themes'

function getLocalTheme(){
    const theme = localStorage.getItem('kiradownloader_theme')
    if(theme == 'light'){
        return light
    }else{
        return dark
    }
}

export const global = {
    theme: getLocalTheme(),
    tab: 'downloader',
    block: false
}

const GlobalContext = createContext(global)

export default GlobalContext