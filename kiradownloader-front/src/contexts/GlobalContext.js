import { createContext } from "react"
import { dark, light } from '../themes'

export const global = {
    theme: dark,
    tab: 'downloader'  
}

const GlobalContext = createContext(global)

export default GlobalContext