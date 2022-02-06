import { createContext } from "react";

export const formatDataContext = {
    file: '',
    path: '',
    fileName: '',
    format: ''
}

const FormatContext = createContext(formatDataContext)

export default FormatContext