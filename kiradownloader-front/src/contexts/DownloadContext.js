import { createContext } from "react";

export const downloadDataContext = {
    url: '',
    path: '',
    media: 'both',
    quality: 'high'
}

const DownloadContext = createContext(downloadDataContext)

export default DownloadContext