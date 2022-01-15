import { createContext } from "react"
import { dark, light } from '../themes'

export const global = {
    theme: dark,
    tab: 'downloader',
    block: false
}

const GlobalContext = createContext(global)

export default GlobalContext